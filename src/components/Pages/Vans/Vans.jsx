import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import styles from "./Vans.module.css";
import VanCard from "./VanCard/VanCard";
import { getVansData } from "../../../utilities/ApiGet";
import Loader from "../../Loader/Loader";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  React.useEffect(() => {
    async function loadVans() {
      const data = await getVansData("/api/vans");
      setVans(data);
    }
    loadVans();
  }, []);

  const vanCardsBuilder = displayedVans.map((van) => {
    return (
      <VanCard
        key={van.id}
        vanData={van}
        state={{ search: searchParams.toString() }}
      />
    );
  });

  return (
    <>
      <div className={styles.container}>
        {vans.length > 0 ? (
          <>
            <h1 className={styles.title}>Explore our van options</h1>

            <div className={styles.filterContainer}>
              <button
                className={`${styles.filterItem} ${styles.simple} ${
                  typeFilter === "simple" ? styles.active : ""
                }`}
                onClick={() => setSearchParams({ type: "simple" })}
              >
                Simple
              </button>
              <button
                className={`${styles.filterItem} ${styles.luxury} ${
                  typeFilter === "luxury" ? styles.active : ""
                }`}
                onClick={() => setSearchParams({ type: "luxury" })}
              >
                Luxury
              </button>
              <button
                className={`${styles.filterItem} ${styles.rugged} ${
                  typeFilter === "rugged" ? styles.active : ""
                }`}
                onClick={() => setSearchParams({ type: "rugged" })}
              >
                Rugged
              </button>

              {typeFilter ? (
                <NavLink
                  className={styles.filterClear}
                  onClick={() => setSearchParams({})}
                >
                  Clear filters
                </NavLink>
              ) : null}
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
