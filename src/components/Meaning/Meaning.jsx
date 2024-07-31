import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./meaning.module.css";

function Meaning({ meaning }) {
  return (
    <section className={styles.meaning}>
      <SectionHeading
        className={`fs-600 ${styles.sectionHeading}`}
        headingLevel={3}
        text={meaning.partOfSpeech}
      />
      <h4 className={styles.subHeading}>Meaning</h4>
      <ul className={styles.definitions}>
        {meaning.definitions.map((definition, i) => (
          <li key={i}>
            {definition.definition}
            {definition.example && (
              <p className={`clr-neutral-400 ${styles.example}`}>
                “{definition.example}”
              </p>
            )}
          </li>
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <dl className={`fs-500 ${styles.synonyms}`}>
          <dt className="clr-neutral-400">Synonyms</dt>
          {meaning.synonyms.map((synonym, i) => (
            <dd className="clr-primary fw-bold" key={i}>
              {synonym}
            </dd>
          ))}
        </dl>
      )}
    </section>
  );
}

export default Meaning;
