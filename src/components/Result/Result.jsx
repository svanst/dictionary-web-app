import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Meaning from "../Meaning/Meaning";
import Pronunciation from "../Pronunciation/Pronunciation";

import styles from "./result.module.css";
import Divider from "../Divider/Divider";

const result = {
  word: "keyboard",
  phonetic: "/ˈkiːbɔːd/",
  phonetics: [
    { text: "/ˈkiːbɔːd/", audio: "" },
    { text: "/ˈkiːbɔːd/", audio: "" },
    {
      text: "/ˈkibɔɹd/",
      audio:
        "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1755168",
      license: {
        name: "BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
    },
  ],
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition:
            "(etc.) A set of keys used to operate a typewriter, computer etc.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: ["electronic keyboard"],
      antonyms: [],
    },
    {
      partOfSpeech: "verb",
      definitions: [
        {
          definition: "To type on a computer keyboard.",
          synonyms: [],
          antonyms: [],
          example: "Keyboarding is the part of this job I hate the most.",
        },
      ],
      synonyms: [],
      antonyms: [],
    },
  ],
  license: {
    name: "CC BY-SA 3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  sourceUrls: ["https://en.wiktionary.org/wiki/keyboard"],
};

function Result() {
  const audioSrc = result.phonetics.find(
    (phonetic) => phonetic.audio !== ""
  ).audio;

  return (
    <>
      <Pronunciation
        word="keyboard"
        pronunciation={result.phonetic}
        audioSrc={audioSrc}
      />
      <VisuallyHidden>
        <h2>Definitions</h2>
      </VisuallyHidden>
      {result.meanings.map((meaning) => (
        <Meaning key={meaning.partOfSpeech} meaning={meaning} />
      ))}
      <Divider />
      <div className={styles.source}>
        <h2 className="fs-200 fw-regular clr-neutral-400">Source</h2>
        <a
          href={result.sourceUrls[0]}
          className="fs-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {result.sourceUrls[0]}
        </a>
      </div>
    </>
  );
}

export default Result;
