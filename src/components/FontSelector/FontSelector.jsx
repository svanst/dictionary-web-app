import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import styles from "./font-selector.module.css";
import { useEffect, useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";

const options = [
  { label: "Sans Serif", id: "sans" },
  { label: "Serif", id: "serif" },
  { label: "Mono", id: "mono" },
];

function FontSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.dataset.font = selectedOption.id;
  }, [selectedOption]);

  function next() {
    const newCurrentIndex = Math.min(currentIndex + 1, options.length - 1);
    setCurrentIndex(newCurrentIndex);
  }

  function previous() {
    const newCurrentIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newCurrentIndex);
  }

  function selectCurrent() {
    setSelectedOption(options[currentIndex]);
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
          aria-activedescendant={selectedOption.id}
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
          {selectedOption.label}
        </button>

        <ul id="option-list" role="listbox" aria-labelledby="font-label">
          {options.map((option, i) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              className={`ff-${option.id} ${
                i === currentIndex ? styles.currentOption : ""
              }`}
              key={option.id}
              role="option"
              aria-selected={option === selectedOption}
              id={option.id}
              data-value={option.label.toLowerCase()}
              onClick={(e) => {
                setSelectedOption(
                  options.find((option) => option.id === e.currentTarget.id)
                );
                setCurrentIndex(i);
                setIsOpen(false);
              }}
              onMouseDown={(e) => e.preventDefault()} // prevent blur event that would fire before the click event of the li
            >
              {option === selectedOption && (
                <CheckIcon className={styles.check} />
              )}
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FontSelector;
