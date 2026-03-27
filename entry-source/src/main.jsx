import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StarsCanvas } from "./components/GlobalStarfield";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarsCanvas />
    <App />
  </React.StrictMode>,
);
