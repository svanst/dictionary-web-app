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
        <img src="../src/assets/images/icon-play.svg" alt="" />
      </Button>
    </div>
  );
}

export default Pronunciation;
