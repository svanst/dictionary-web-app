import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Switch from "../Switch/Switch";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo} aria-label="Dictionary app | Home">
        <img src="/src/assets/images/logo.svg" alt="" />
      </a>
      <Dropdown />
      <div className={styles.bar} aria-hidden="true"></div>
      <Switch />
    </header>
  );
}

export default Header;
