import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from '@emotion/react'
import App from "./App";

const global = css`
    * {
      margin: 0;
      padding: 0;
    }
`
console.log("ugoke");

ReactDOM.render(
  <React.StrictMode>
    <Global styles={global} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

