import { useOutletContext } from "react-router-dom";
import styles from "./UsersVanPhotos.module.css";

export default function UsersVanPhotos() {
  const van = useOutletContext();

  return (
    <div>
      <img className={styles.vanImage} src={van.imageUrl} alt="Van photo" />
    </div>
  );
}
