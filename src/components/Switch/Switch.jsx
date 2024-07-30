import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import styles from "./switch.module.css";

function Switch() {
  return (
    <>
      <label htmlFor="theme" className={styles.switch}>
        <VisuallyHidden>Theme</VisuallyHidden>
        <input
          type="checkbox"
          name="theme"
          id="theme"
          role="switch"
          aria-checked="false"
          className={styles.input}
        />
        <span className={styles.slider}></span>
      </label>
    </>
  );
}

export default Switch;
