import styles from "./UsersVanDescription.module.css";

export default function UsersVanDescription(props) {
  return (
    <div className={styles.descriptionContainer}>
      <p>
        <span>Name: </span>
        {props.name}
      </p>

      <p>
        <span>Category: </span>
        {props.type}
      </p>

      <p>
        <span>Description: </span>
        {props.description}
      </p>

      <p>
        <span>Visibility: </span>
        public
      </p>
    </div>
  );
}
