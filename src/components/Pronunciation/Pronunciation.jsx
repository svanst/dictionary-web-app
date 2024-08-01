import Button from "../Button/Button";
import styles from "./pronunciation.module.css";

function Pronunciation({ word, pronunciation, audioSrc, className }) {
  const handlePlay = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div className={`${className} ${styles.wrapper}`}>
      <h1 className={styles.word}>{word}</h1>
      <span className={styles.pronunciation}>{pronunciation}</span>
      <Button className={styles.play} aria-label="play" onClick={handlePlay}>
        <svg
          className={styles.img}
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          aria-hidden="true"
        >
          <g fill="var(--clr-primary)" fillRule="evenodd">
            <circle
              className={styles.circle}
              fill="var(--clr-primary)"
              cx="37.5"
              cy="37.5"
              r="37.5"
              opacity=".25"
            />
            <path className={styles.triangle} d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </Button>
    </div>
  );
}

export default Pronunciation;
