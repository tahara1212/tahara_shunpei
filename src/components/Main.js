import React from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import bg from "../images/bg.jpg";
import { motion } from "framer-motion";

export const Main = () => {
  return (
    <SContainer>
      <SMain>
      <SMainBg
        animate={AnimateDefault}
        transition={TransitionDefault}
        >
        </SMainBg>
        <SVG width="720" height="720">
                     <SCircle cx="360" cy="360" r="260" fill-opacity="0" />
              </SVG>
      </SMain>
    </SContainer>
  );
};

const AnimateDefault = {
  scale: 1
};

const TransitionDefault = {
  from: 1.5,
  repeat: Infinity,
  duration: 10,
  ease: "easeOut",
};

const SContainer = styled.div`
    width: 100%;
    /* height: 100vh; */
    /* background-color: black; */
    display: flex;
    justify-content: center; /*左右中央揃え*/
    align-items: center;     /*上下中央揃え*/
`

const SMain = styled.div`
    width: calc(100% - 80px);
    height: calc(95vh - 90px);
    overflow: hidden;
    background-color: blue;
`

const SMainBg = styled(motion.div)`
    width: calc(100%);
    height: calc(95vh - 90px);
    /* background-color: white; */
    margin: 0 auto;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* transform: scale(1); */
    overflow: hidden;
`

const SVG = styled.svg`
       transform: rotate(-90deg);
       position: absolute;
       background-color: transparent;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       z-index: 1;
`
const KC = keyframes`
  0% { stroke-dasharray: 0 2261; }
  99.9%,to { stroke-dasharray: 2261 2261; }
`
const SCircle = styled.circle`
    fill: transparent;
    stroke: black;
    stroke-width: 0.5;
    animation: ${KC} 10s infinite;
`

