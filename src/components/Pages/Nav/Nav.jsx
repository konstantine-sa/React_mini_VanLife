import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div>
      <nav className={styles.navBar}>
        <Link to="/" className={styles.navItem}>
          Home
        </Link>
        <Link to="/about" className={styles.navItem}>
          About
        </Link>
        <Link to="/vans" className={styles.navItem}>
          Vans
        </Link>
      </nav>
    </div>
  );
}
