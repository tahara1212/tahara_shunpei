import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import App from "./App";
import Besley from "./fonts/Besley-Italic.ttf";
import Allison from "./fonts/Allison-Regular.ttf";
import KleeOne from "./fonts/ShipporiMincho-Regular.ttf";

const GlobalStyles = css`
  @font-face {
    font-family: "Besley";
    font-style: normal;
    font-weight: 400;
    src: url(${Besley});
  }
  @font-face {
    font-family: "Allison";
    font-style: normal;
    font-weight: 400;
    src: url(${Allison});
  }
  @font-face {
    font-family: "KleeOne";
    font-style: normal;
    font-weight: 400;
    src: url(${KleeOne});
  }
  * {
    margin: 0;
    padding: 0;
    font-family: "Besley", serif;
    background-color: whitesmoke;
  }
  body {
    /* background-color: whitesmoke; */
  }
  p,
  h1 {
    font-family: "Allison", sans-serif;
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
