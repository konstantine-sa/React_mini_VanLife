import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.navbarWrap}>
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
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navItem
          }
        >
          <svg
            className={styles.login}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.12104 17.8047C7.15267 16.6564 9.4998 16.001 12 16.001C14.5002 16.001 16.8473 16.6564 18.879 17.8047M15 10.001C15 11.6578 13.6569 13.001 12 13.001C10.3431 13.001 9 11.6578 9 10.001C9 8.34412 10.3431 7.00098 12 7.00098C13.6569 7.00098 15 8.34412 15 10.001ZM21 12.001C21 16.9715 16.9706 21.001 12 21.001C7.02944 21.001 3 16.9715 3 12.001C3 7.03041 7.02944 3.00098 12 3.00098C16.9706 3.00098 21 7.03041 21 12.001Z"
              stroke="#4D4D4D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
      </nav>
    </div>
  );
}
