import React from "react";
import styles from "./About.module.css";
import ButtonMedium from "../../Buttons/ButtonMedium/ButtonMedium";

export default function About() {
  return (
    <div>
      <div className={styles.heroImg}></div>
      <section className={styles.container}>
        <h1 className={styles.title}>
          Experience the bliss of traveling in a van instead of cramming into a
          sedan.
        </h1>
        <p className={styles.description}>
          At our core, we strive to elevate your road trip experience with the
          ideal travel van rental. Rest assured, our vans undergo thorough
          recertification before each trip, guaranteeing a smooth journey
          without a glitch. (Hitch costs extra 😉) <br />
          <span>
            Our team comprises passionate vanlife enthusiasts who have
            personally witnessed the enchantment of exploring the world on four
            wheels.
          </span>
        </p>
        <div className={styles.calltoactionContainer}>
          <h3 className={styles.calltoactionTitle}>
            Your destination is waiting. <br />
            Your van is ready.
          </h3>
          <div className={styles.buttonMediumWrap}>
            <ButtonMedium buttonName="Explore our vans" url="../vans/" />
          </div>
        </div>
      </section>
    </div>
  );
}
