import React from "react";
import ReactDOM from "react-dom/client";
import { Navigation } from "./navigation/index.tsx";
import "../globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
);
