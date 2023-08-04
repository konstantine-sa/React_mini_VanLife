import React from "react";
import styles from "./Home.module.css";
import ButtonLarge from "../../Buttons/ButtonLarge/ButtonLarge";

export default function Home() {
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
        <div className={styles.buttonWrap}>
          <ButtonLarge className={styles.button} buttonName="Find your van" />
        </div>
      </section>
    </div>
  );
}
