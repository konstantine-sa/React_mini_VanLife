import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.container}>
        <p className={styles.copyright}>&copy; 2022 #VANLIFE</p>
      </footer>
    </div>
  );
}
