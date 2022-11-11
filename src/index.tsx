import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "~/App";
import "~/i18n/i18n";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
