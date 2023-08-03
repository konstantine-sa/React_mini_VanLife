import React from "react";
import { NavLink, useSearchParams, useLoaderData } from "react-router-dom";
import styles from "./Vans.module.css";
import VanCard from "./VanCard/VanCard";
import { getVansData } from "../../../utilities/ApiGet";
import Loader from "../../Loader/Loader";

export function loader() {
  return getVansData("/api/vans");
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams([]);

  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanCardsBuilder = displayedVans
    ? displayedVans.map((van) => {
        return (
          <VanCard
            key={van.id}
            vanData={van}
            state={{ search: searchParams.toString() }}
          />
        );
      })
    : null;

  return (
    <>
      <div className={styles.container}>
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
                onClick={() => setSearchParams(null)}
              >
                Clear filters
              </NavLink>
            ) : null}
          </div>
          <div className={styles.vansItemsContainer}>{vanCardsBuilder}</div>
        </>
      </div>
    </>
  );
}
