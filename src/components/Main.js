import React from "react";
import styled from "@emotion/styled";
// import { css, keyframes } from "@emotion/react";
import bg from "../images/bg.jpg";
import { motion } from "framer-motion";

export const Main = () => {
  console.log("aa")
  return (
    <BG1>
      <BG2>
      <SContainer
        animate={AnimateDefault}
        transition={TransitionDefault}
      ></SContainer>
      </BG2>
      
    </BG1>
  );
};

const AnimateDefault = {
  scale: 1
};

const TransitionDefault = {
  from: 1.5,
  repeat: Infinity,
  duration: 8,
};

const BG1 = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center; /*左右中央揃え*/
    align-items: center;     /*上下中央揃え*/
`

const BG2 = styled.div`
    width: calc(100% - 80px);
    height: calc(100vh - 90px);
    overflow: hidden;

`

const SContainer = styled(motion.div)`
    width: calc(100% - 80px);
    height: calc(100vh - 90px);
    background-color: white;
    margin: 0 auto;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* transform: scale(2.5); */
    overflow: hidden;
`

// const SContainerStyle = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: violet;
//   background-image: url(${bg});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   z-index: 1;
// `;
