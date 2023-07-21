import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./Vans.module.css";
import VanCard from "./VanCard/VanCard";

export default function Vans() {
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
        <div className={styles.vansItemsContainer}>
          <VanCard />
          <VanCard />
          <VanCard />
          <VanCard />
          <VanCard />
          <VanCard />
        </div>
      </div>
    </div>
  );
}
