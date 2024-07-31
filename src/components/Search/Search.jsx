import Button from "../Button/Button";
import styles from "./search.module.css";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function Search({ className = "" }) {
  return (
    <form className={className} action="">
      <div className={styles.wrapper}>
        <VisuallyHidden asChild>
          <label htmlFor="word">Word</label>
        </VisuallyHidden>

        <input className={styles.input} type="text" name="word" id="word" />
        <Button type="submit" className={styles.button} aria-label="search">
          <img src="/src/assets/images/icon-search.svg" alt="" />
        </Button>
      </div>
    </form>
  );
}

export default Search;
