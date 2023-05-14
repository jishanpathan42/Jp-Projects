import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import FansContext from "Context";
ReactDOM.render(
  <React.StrictMode>
    <FansContext>
      <App/>
    </FansContext>
  </React.StrictMode>,
  document.getElementById("root")
);
