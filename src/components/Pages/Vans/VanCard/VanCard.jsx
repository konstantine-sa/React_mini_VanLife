import styles from "./VanCard.module.css";
import VanCategoryButton from "../../../Buttons/VanCategoryButton/VanCategoryButton";

export default function VanCard(props) {
  return (
    <div className={styles.item}>
      <div className={styles.itemImage}></div>
      <p className={styles.itemTitle}>Modest Explorer</p>
      <p className={styles.itemPrice}>
        $60
        <br />
        <span>/day</span>
      </p>
      <VanCategoryButton category={props.category} />
    </div>
  );
}
