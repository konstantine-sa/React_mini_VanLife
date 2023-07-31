import { useOutletContext } from "react-router-dom";
import styles from "./UsersVanPricing.module.css";

export default function UsersVanPricing() {
  const van = useOutletContext();
  return (
    <div>
      <p className={styles.itemPrice}>
        ${van.price}
        <span>/day</span>
      </p>
    </div>
  );
}
