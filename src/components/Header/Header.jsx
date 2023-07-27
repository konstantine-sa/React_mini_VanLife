import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <div>
      <section className={styles.container}>
        <Link to="/" className={styles.title}>
          #VANLIFE
        </Link>
        <Nav />
      </section>
    </div>
  );
}
