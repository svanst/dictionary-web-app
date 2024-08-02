import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import styles from "./font-selector.module.css";
import { useEffect, useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";

const fonts = [
  { label: "Sans Serif", id: "sans" },
  { label: "Serif", id: "serif" },
  { label: "Mono", id: "mono" },
];

function FontSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState(getInitialFont);
  const [currentIndex, setCurrentIndex] = useState(() =>
    fonts.findIndex((font) => font.id === selectedFont.id)
  );

  useEffect(() => {
    document.body.dataset.font = selectedFont.id;
    localStorage.setItem("font", JSON.stringify(selectedFont));
  }, [selectedFont]);

  function next() {
    const newCurrentIndex = Math.min(currentIndex + 1, fonts.length - 1);
    setCurrentIndex(newCurrentIndex);
  }

  function previous() {
    const newCurrentIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newCurrentIndex);
  }

  function selectCurrent() {
    setSelectedFont(fonts[currentIndex]);
  }

  function handleKeyDown(e) {
    const key = e.key;
    if (!["ArrowDown", "ArrowUp", "Tab", "Escape"].includes(key)) return;

    switch (key) {
      case "ArrowDown":
        e.preventDefault();
        next();
        break;
      case "ArrowUp":
        e.preventDefault();
        previous();
        break;
      case "Tab":
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
          e.currentTarget.focus();
        }
        break;
      case "Escape":
        setIsOpen(false);
        e.currentTarget.focus();
    }
  }

  const isSelectedFont = (font) => font.id === selectedFont.id;

  function getInitialFont() {
    const fontLocalStorage = localStorage.getItem("font");
    return fontLocalStorage ? JSON.parse(fontLocalStorage) : fonts[0];
  }

  return (
    <>
      <div className={`fs-300 fw-bold ${styles.dropdown}`}>
        <VisuallyHidden asChild>
          <label id="font-label" htmlFor="font-dropdown-trigger">
            Font
          </label>
        </VisuallyHidden>
        <button
          id="font-dropdown-trigger"
          type="button"
          aria-controls="option-list"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby="font-label"
          role="combobox"
          tabIndex="0"
          aria-activedescendant={selectedFont.id}
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
            } else {
              selectCurrent();
              setIsOpen(false);
            }
          }}
          onBlur={() => setIsOpen(false)}
          onKeyDown={handleKeyDown}
        >
          {selectedFont.label}
        </button>

        <ul id="option-list" role="listbox" aria-labelledby="font-label">
          {fonts.map((font, i) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              className={`ff-${font.id} ${
                i === currentIndex ? styles.currentOption : ""
              }`}
              key={font.id}
              role="option"
              aria-selected={isSelectedFont(font)}
              id={font.id}
              data-value={font.label.toLowerCase()}
              onClick={(e) => {
                setSelectedFont(
                  fonts.find((font) => font.id === e.currentTarget.id)
                );
                setCurrentIndex(i);
                setIsOpen(false);
              }}
              onMouseDown={(e) => e.preventDefault()} // prevent blur event that would fire before the click event of the li
            >
              {isSelectedFont(font) && <CheckIcon className={styles.check} />}
              {font.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FontSelector;
