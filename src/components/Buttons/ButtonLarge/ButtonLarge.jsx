import styles from "./ButtonLarge.module.css";
import { Link } from "react-router-dom";

export default function ButtonLarge(props) {
  return <Link className={styles.buttonLarge}>{props.buttonName}</Link>;
}
