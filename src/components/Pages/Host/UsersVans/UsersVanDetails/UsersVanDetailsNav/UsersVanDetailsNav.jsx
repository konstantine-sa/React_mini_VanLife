import { NavLink } from "react-router-dom";
import styles from "./UsersVanDetailsNav.module.css";

export default function UsersVanDetailsNav() {
  return (
    <nav className={styles.navBar}>
      <NavLink
        to={"."}
        end
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItem
        }
      >
        Details
      </NavLink>
      <NavLink
        to={"pricing"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItem
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to={"photos"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItem
        }
      >
        Photos
      </NavLink>
    </nav>
  );
}
