import React from "react";
import styles from "./UsersVans.module.css";
import ListedVanCard from "./ListedVanCard/ListedVanCard";
import Loader from "../../../Loader/Loader";

export default function UsersVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
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
