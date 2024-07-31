import MaxWidthWrapper from "./MaxWidthWrapper/MaxWidthWrapper";
import Header from "./Header/Header";
import styles from "./app.module.css";
import Result from "./Result/Result";
import Search from "./Search/Search";

export default function App() {
  return (
    <MaxWidthWrapper>
      <Header className={styles.header} />
      <main>
        <Search className={styles.search} />
        <Result />
      </main>
    </MaxWidthWrapper>
  );
}
