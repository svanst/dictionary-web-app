import styles from "./search.module.css";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function Search() {
  return (
    <form action="">
      <div className={styles.wrapper}>
        <VisuallyHidden asChild>
          <label htmlFor="word">Word</label>
        </VisuallyHidden>

        <input className={styles.input} type="text" name="word" id="word" />
        <button className={styles.button}>
          <VisuallyHidden>Search</VisuallyHidden>
          <img src="/src/assets/images/icon-search.svg" alt="" />
        </button>
      </div>
    </form>
  );
}

export default Search;
