import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styles from "./HostNav.module.css";

export default function HostNav(props) {
  return (
    <div>
      <nav className={styles.navBar}>
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
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
