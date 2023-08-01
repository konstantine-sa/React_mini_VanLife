import styles from "./ErrorPage.module.css";
import ButtonLarge from "../../Buttons/ButtonLarge/ButtonLarge";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <span className={styles.face}>&#9785;</span>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        The page your are looking for doesn&apos;t exist or an other error
        occured
      </p>
      <div className={styles.buttonWrap}>
        <ButtonLarge buttonName={"Back to Home"} />
      </div>
    </div>
  );
}
