import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Title = (props) => {
  const { title } = props;
  console.log(title);
  return (
    <>
      <SVG width="720" height="720">
        <SCircle cx="360" cy="360" r="160" fill-opacity="0" />
      </SVG>
      <SMainText>{title}</SMainText>
    </>
  );
};

const SVG = styled.svg`
  /* transform: rotate(-90deg); */
  position: fixed;
  background-color: transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
`;

const KFCircle = keyframes`
  0% { stroke-dasharray: 0 1000; }
  99% { stroke-dasharray: 1000 1000; }
`;

const SCircle = styled.circle`
  fill: transparent;
  stroke: black;
  stroke-width: 0.3;
  animation: ${KFCircle} 10s infinite ease-out;
`;

const SMainText = styled.p`
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: translate(-50%, -50%);
  font-size: 160px;
  font-family: "Allison", serif;
`;
