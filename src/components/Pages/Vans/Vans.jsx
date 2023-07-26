import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./Vans.module.css";
import VanCard from "./VanCard/VanCard";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanCardsBuilder = vans.map((van) => {
    return <VanCard key={van.id} vanData={van} />;
  });

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Explore our van options</h1>

        <div className={styles.filterContainer}>
          <div className={styles.filterItem}>Simple</div>
          <div className={styles.filterItem}>Luxury</div>
          <div className={styles.filterItem}>Rugged</div>
          <p className={styles.filterClear}>Clear filters</p>
        </div>
        <div className={styles.vansItemsContainer}>{vanCardsBuilder}</div>
      </div>
    </div>
  );
}
