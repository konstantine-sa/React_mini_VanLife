import React from "react";
import { Link } from "react-router-dom";
import styles from "./VanCard.module.css";
import VanCategoryButton from "../../../Buttons/VanCategoryButton/VanCategoryButton";

export default function VanCard(props) {
  return (
    <div className={styles.item}>
      <Link to={props.vanData.id}>
        <img className={styles.itemImage} src={props.vanData.imageUrl}></img>
        <p className={styles.itemTitle}>{props.vanData.name}</p>
        <p className={styles.itemPrice}>
          ${props.vanData.price}
          <br />
          <span>/day</span>
        </p>
        <VanCategoryButton category={props.vanData.type} />
      </Link>
    </div>
  );
}
