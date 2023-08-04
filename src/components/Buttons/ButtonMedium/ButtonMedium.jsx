import styles from "./ButtonMedium.module.css";
import { Link } from "react-router-dom";

export default function ButtonMedium(props) {
  return (
    <Link to={props.url} className={styles.buttonMedium}>
      {props.buttonName}
    </Link>
  );
}
