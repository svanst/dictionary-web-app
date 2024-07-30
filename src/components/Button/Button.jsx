import styles from "./Button.module.css";

function Button({ children, ...rest }) {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
}

export default Button;
