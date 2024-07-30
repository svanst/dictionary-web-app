import styles from "./Button.module.css";

function Button({ children, className = "", ...rest }) {
  return (
    <button className={`${styles.btn} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
