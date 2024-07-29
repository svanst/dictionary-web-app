import Search from "./Search/Search";
import MaxWidthWrapper from "./MaxWidthWrapper/MaxWidthWrapper";

export default function App() {
  return (
    <div>
      <h1>React app</h1>
      <MaxWidthWrapper>
        <Search />
      </MaxWidthWrapper>
    </div>
  );
}
