import Dropdown from "../Dropdown/Dropdown";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo} aria-label="Dictionary app | Home">
        <img src="/src/assets/images/logo.svg" alt="" />
      </a>
      <Dropdown />
      <div className={styles.bar} aria-hidden="true"></div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
