import React from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import bg from "../images/bg.jpeg";
import t1 from "../images/triangle01.png";
import t2 from "../images/triangle02.png";
import t3 from "../images/triangle03.png";

export const Main = () => {
  return <SContainerStyle></SContainerStyle>;
};

const SContainerStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: violet;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;
