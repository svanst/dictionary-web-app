import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import styles from "./themetoggle.module.css";
import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <label className={styles.toggle} htmlFor="theme">
      <div className={styles.switch}>
        <input
          type="checkbox"
          name="theme"
          id="theme"
          role="switch"
          checked={darkMode}
          aria-checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
          className={styles.input}
        />
        <span className={styles.slider}></span>
      </div>
      <VisuallyHidden>Theme</VisuallyHidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        aria-hidden="true"
      >
        <path
          fill="none"
          stroke={`var(--clr-neutral-400)`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </label>
  );
}

export default ThemeToggle;
