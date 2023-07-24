import styles from "./VanCategoryButton.module.css";

export default function VanCategoryButton(props) {
  const categoryCapitalized = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const categoryClassName = props.category
    ? props.category.toLowerCase()
    : "simple";

  return (
    <button
      className={`${styles.vanCategoryButton} ${styles[categoryClassName]}`}
    >
      {categoryCapitalized(props.category || "simple")}
    </button>
  );
}
