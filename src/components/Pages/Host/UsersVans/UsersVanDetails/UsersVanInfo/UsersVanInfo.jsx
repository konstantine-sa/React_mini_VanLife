import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styles from "./UsersVanInfo.module.css";

export default function UsersVanInfo() {
  const van = useOutletContext();

  return (
    <div className={styles.descriptionContainer}>
      <p>
        <span>Name: </span>
        {van.name}
      </p>

      <p>
        <span>Category: </span>
        {van.type}
      </p>

      <p>
        <span>Description: </span>
        {van.description}
      </p>

      <p>
        <span>Visibility: </span>
        public
      </p>
    </div>
  );
}
