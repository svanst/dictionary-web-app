import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Switch from "../Switch/Switch";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <Button aria-label="Dictionary app | Home">
        <img src="/src/assets/images/logo.svg" alt="" />
      </Button>
      <Dropdown />
      {/* <Switch /> */}
    </header>
  );
}

export default Header;
