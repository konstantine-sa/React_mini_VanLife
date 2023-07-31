import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useSearchParams,
} from "react-router-dom";
import styles from "./Vans.module.css";
import VanCard from "./VanCard/VanCard";
import Loader from "../../Loader/Loader";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanCardsBuilder = displayedVans.map((van) => {
    return <VanCard key={van.id} vanData={van} />;
  });

  return (
    <>
      <div className={styles.container}>
        {vans.length > 0 ? (
          <>
            <h1 className={styles.title}>Explore our van options</h1>

            <div className={styles.filterContainer}>
              <NavLink
                className={`${styles.filterItem} ${styles.simple}`}
                to={"?type=simple"}
              >
                Simple
              </NavLink>
              <NavLink
                className={`${styles.filterItem} ${styles.luxury}`}
                to={"?type=luxury"}
              >
                Luxury
              </NavLink>
              <Link
                className={`${styles.filterItem} ${styles.rugged}`}
                to={"?type=rugged"}
              >
                Rugged
              </Link>
              <NavLink className={styles.filterClear} to={"."}>
                Clear filters
              </NavLink>
            </div>
            <div className={styles.vansItemsContainer}>{vanCardsBuilder}</div>
          </>
        ) : (
          <div>
            <h2>Loading...</h2>
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}
