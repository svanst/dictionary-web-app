import Search from "./Search/Search";
import MaxWidthWrapper from "./MaxWidthWrapper/MaxWidthWrapper";
import Header from "./Header/Header";

export default function App() {
  return (
    <MaxWidthWrapper>
      <Header />
      <main>{/* <Search /> */}</main>
    </MaxWidthWrapper>
  );
}
