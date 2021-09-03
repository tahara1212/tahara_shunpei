import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from '@emotion/react'
import App from "./App";

const global = css`
@font-face {
  font-family: 'Besley';
        font-style: normal;
        font-weight: 400;
        src: url('https://fonts.googleapis.com/css2?family=Besley:ital@1&display=swap');
      }
    * {
      margin: 0;
      padding: 0;
      font-family: 'Besley', serif;
      background-color: whitesmoke;
    }
`
ReactDOM.render(
  <React.StrictMode>
    <Global styles={global} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

