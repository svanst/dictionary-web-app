import styles from "./MaxWidthWrapper.module.css";

function MaxWidthWrapper({ width, children }) {
  return (
    <div className={styles.container} style={{ "--width": width }}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
