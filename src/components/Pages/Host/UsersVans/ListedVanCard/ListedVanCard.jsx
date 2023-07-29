import { Link } from "react-router-dom";
import styles from "./ListedVanCard.module.css";

export default function ListedVanCard(props) {
  return (
    <>
      <Link to={`/host/vans/${props.vanData.id}`}>
        <div className={styles.vanContainer}>
          <img src={props.vanData.imageUrl} className={styles.vanImage}></img>
          <h2 className={styles.vanTitle}>{props.vanData.name}</h2>
          <p className={styles.vanPrice}>
            ${props.vanData.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
    </>
  );
}
