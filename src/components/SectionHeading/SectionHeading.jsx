import styles from "./SectionHeading.module.css";

function SectionHeading({ headingLevel = 2, text, className = "" }) {
  const Heading = `h${headingLevel}`;

  return (
    <Heading className={`${className} ${styles.sectionHeading}`}>
      {text}
    </Heading>
  );
}

export default SectionHeading;
