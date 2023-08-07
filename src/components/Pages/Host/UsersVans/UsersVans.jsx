import { useLoaderData } from "react-router-dom";
import styles from "./UsersVans.module.css";
import ListedVanCard from "./ListedVanCard/ListedVanCard";
import { getUsersVans } from "../../../../utilities/ApiGet";

export function loader() {
  return getUsersVans("/api/vans");
}

export default function UsersVans() {
  const vans = useLoaderData();

  const vanCardsBuilder = vans.map((van) => {
    return <ListedVanCard key={van.id} vanData={van} />;
  });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Your listed vans</h1>
        <div>{vanCardsBuilder}</div>
      </div>
    </>
  );
}
