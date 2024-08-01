import styles from "./errorMessage.module.css";

function ErrorMessage({ title, message, resolution }) {
  return (
    <section className={styles.errorMessage}>
      <span className={styles.smiley}>😕</span>
      <h1 className="fs-500">{title}</h1>
      <p className="clr-neutral-400">
        {message} {resolution}
      </p>
    </section>
  );
}

export default ErrorMessage;
