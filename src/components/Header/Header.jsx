import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <section className={styles.container}>
        <h1 className={styles.title}>#VANLIFE</h1>
        <nav className={styles.navBar}>
          <p className={styles.navItem}>About</p>
          <p className={styles.navItem}>Vans</p>
        </nav>
      </section>
    </div>
  );
}
