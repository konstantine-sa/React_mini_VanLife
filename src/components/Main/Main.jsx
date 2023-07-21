import React from "react";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div>
      <section className={styles.container}>
        <h1 className={styles.title}>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={styles.description}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button>Find your van</button>
      </section>
    </div>
  );
}
