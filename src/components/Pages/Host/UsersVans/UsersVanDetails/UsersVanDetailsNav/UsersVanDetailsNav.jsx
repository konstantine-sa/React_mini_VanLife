import { NavLink } from "react-router-dom";
import styles from "./UsersVanDetailsNav.module.css";

export default function UsersVanDetailsNav() {
  return (
    <nav>
      <NavLink className={styles.navItem}>Details</NavLink>
      <NavLink className={styles.navItem}>Pricing</NavLink>
      <NavLink className={styles.navItem}>Photos</NavLink>
    </nav>
  );
}
