import React from "react";
import styles from "./Footer.module.css";
import Nav from "../Nav/Nav";

export default function Footer() {
  return (
    <div>
      <footer className={styles.container}>
        <p className={styles.copyright}>&copy; 2022 #VANLIFE</p>
        <Nav />
      </footer>
    </div>
  );
}
