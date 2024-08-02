import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Meaning from "../Meaning/Meaning";
import Pronunciation from "../Pronunciation/Pronunciation";

import styles from "./result.module.css";
import Divider from "../Divider/Divider";

function Result({ data }) {
  const audioSrc = data.phonetics.find((phonetic) => phonetic.audio)?.audio;

  const phonetic =
    data.phonetic || data.phonetics.find((phonetic) => phonetic.text)?.text;

  return (
    <>
      <Pronunciation
        word={data.word}
        pronunciation={phonetic}
        audioSrc={audioSrc}
      />
      <VisuallyHidden>
        <h2>Definitions</h2>
      </VisuallyHidden>
      {data.meanings.map((meaning, i) => (
        <Meaning key={i} meaning={meaning} />
      ))}
      <Divider />
      <div className={styles.source}>
        <h2 className="fs-200 fw-regular clr-neutral-400">Source</h2>
        <a
          href={data.sourceUrls[0]}
          className="fs-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.sourceUrls[0]}
        </a>
      </div>
    </>
  );
}

export default Result;
