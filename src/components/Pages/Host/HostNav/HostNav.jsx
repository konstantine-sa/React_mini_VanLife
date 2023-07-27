import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./HostNav.module.css";

export default function HostNav(props) {
  return (
    <div>
      <nav className={styles.navBar}>
        <Link to="/host" className={styles.navItem}>
          Dashboard
        </Link>
        <Link to="/host/income" className={styles.navItem}>
          Income
        </Link>
        <Link to="/host/vans" className={styles.navItem}>
          Vans
        </Link>
        <Link to="/host/reviews" className={styles.navItem}>
          Reviews
        </Link>
      </nav>
    </div>
  );
}
