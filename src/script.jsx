import "./global-styles/reset.css";
import "./global-styles/root.module.css";
import "./global-styles/utilities.module.css";
import "./global-styles/style.css";

import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
