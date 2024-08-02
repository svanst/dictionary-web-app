import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Button from "../Button/Button";
import styles from "./search.module.css";
import searchIcon from "../../assets/images/icon-search.svg";
import { useState } from "react";

function Search({ setSubmittedTerm, className }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showValidationFeedback, setShowValidationFeedback] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setSubmittedTerm("");
      setShowValidationFeedback(true);
    } else {
      setSubmittedTerm(searchTerm);
      setShowValidationFeedback(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${className} ${
        showValidationFeedback && styles.wasValidated
      }`}
      noValidate
    >
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
          required
          aria-describedby="error-search"
        />
        <span className={styles.error} id="error-search" aria-live="polite">
          {showValidationFeedback &&
            searchTerm === "" &&
            "Whoops, can't be empty..."}
        </span>
        <Button type="submit" className={styles.button} aria-label="search">
          <img src={searchIcon} alt="" />
        </Button>
      </div>
    </form>
  );
}

export default Search;
