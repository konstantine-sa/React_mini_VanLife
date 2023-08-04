import styles from "./ButtonLarge.module.css";
import { Link } from "react-router-dom";

export default function ButtonLarge(props) {
  return (
    <Link to={props.url} className={styles.buttonLarge}>
      {props.buttonName}
    </Link>
  );
}
