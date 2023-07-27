import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styles from "./HostNav.module.css";

export default function HostNav(props) {
  return (
    <div>
      <nav className={styles.navBar}>
        <NavLink
          to="/host/dashboard"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Reviews
        </NavLink>
      </nav>
    </div>
  );
}
