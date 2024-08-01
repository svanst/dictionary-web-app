import Button from "../Button/Button";
import styles from "./search.module.css";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className={`bg-neutral-200 ${styles.wrapper}`}>
      <VisuallyHidden asChild>
        <label htmlFor="word">Word</label>
      </VisuallyHidden>

      <input
        className={styles.input}
        type="text"
        name="word"
        id="word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type="submit" className={styles.button} aria-label="search">
        <img src="/src/assets/images/icon-search.svg" alt="" />
      </Button>
    </div>
  );
}

export default Search;
