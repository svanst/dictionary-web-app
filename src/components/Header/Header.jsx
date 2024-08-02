import FontSelector from "../FontSelector/FontSelector";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.svg";

function Header({ className = "" }) {
  return (
    <header className={`${className} ${styles.header}`}>
      <a href="/" className={styles.logo} aria-label="Dictionary app | Home">
        <img src={logo} alt="" />
      </a>
      <FontSelector />
      <div className={styles.bar} aria-hidden="true"></div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
