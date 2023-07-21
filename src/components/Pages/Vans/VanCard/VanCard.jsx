import styles from "./VanCard.module.css";

export default function VanCard() {
  return (
    <div className={styles.item}>
      <div className={styles.itemImage}></div>
      <p className={styles.itemTitle}>Modest Explorer</p>
      <p className={styles.itemPrice}>
        $60
        <br />
        <span>/day</span>
      </p>
      <button className={styles.vanCategoryButton}>Simple</button>
    </div>
  );
}
