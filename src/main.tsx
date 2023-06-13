import { App } from "@/App";
import "@/i18n";
import "@/index.css";
import "@fontsource-variable/inter";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
