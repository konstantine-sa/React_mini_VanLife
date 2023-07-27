import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div>
      <nav className={styles.navBar}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}
