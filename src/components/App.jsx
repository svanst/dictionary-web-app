import Search from "./Search/Search";
import MaxWidthWrapper from "./MaxWidthWrapper/MaxWidthWrapper";
import Switch from "./Switch/Switch";

export default function App() {
  return (
    <div>
      <h1>React app</h1>
      <MaxWidthWrapper>
        <Search />
        <Switch />
      </MaxWidthWrapper>
    </div>
  );
}
