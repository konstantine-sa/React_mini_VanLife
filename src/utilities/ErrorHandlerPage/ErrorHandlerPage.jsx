import { useRouteError } from "react-router-dom";
import styles from "./ErrorHandlerPage.module.css";

export default function ErrorHandlerPage() {
  const error = useRouteError();
  return (
    <div className={styles.container}>
      <span className={styles.face}>&#9785;</span>
      <h1>{error.status}</h1>
      <h2>{error.statusText}</h2>
      <p>{error.message}</p>
    </div>
  );
}
