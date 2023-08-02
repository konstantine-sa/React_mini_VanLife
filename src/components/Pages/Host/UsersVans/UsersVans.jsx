import React from "react";
import styles from "./UsersVans.module.css";
import ListedVanCard from "./ListedVanCard/ListedVanCard";
import Loader from "../../../Loader/Loader";
import { getVansData } from "../../../../utilities/ApiGet";

export default function UsersVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    async function loadVans() {
      const data = await getVansData("/api/vans/");
      setVans(data);
    }
    loadVans();
  }, []);

  const vanCardsBuilder = vans.map((van) => {
    return <ListedVanCard key={van.id} vanData={van} />;
  });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Your listed vans</h1>

        {vans.length > 0 ? (
          <div>{vanCardsBuilder}</div>
        ) : (
          <div className={styles.loader}>
            <h2>Loading...</h2>
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}
