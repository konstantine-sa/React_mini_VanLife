import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className={styles.heroImg}></div>
      <section className={styles.container}>
        <h1 className={styles.title}>
          Dont squeeze in a sedan when you could relax in a van.
        </h1>
        <p className={styles.description}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
          <span>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </span>
        </p>
        <div className={styles.calltoactionContainer}>
          <h3 className={styles.calltoactionTitle}>
            Your destination is waiting. <br />
            Your van is ready.
          </h3>
          <Link className={styles.buttonMedium}>Explore our vans</Link>
        </div>
      </section>
    </div>
  );
}
