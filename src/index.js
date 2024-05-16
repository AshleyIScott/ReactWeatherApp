import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather.js";
import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather />
  </StrictMode>
);