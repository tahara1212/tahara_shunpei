import React from "react";
import styled from "@emotion/styled";
import about from "../../images/about.jpeg";
import { keyframes } from "@emotion/react";

export const Works = () => {
  return (
    <SContainer>
      <SWorks>
        <SWorksImage></SWorksImage>
        <SWorksImage></SWorksImage>
        <SWorksImage></SWorksImage>
        <SWorksImage></SWorksImage>
      </SWorks>
    </SContainer>
  );
};

const SContainer = styled.div`
  /* width: 100%;
  height: 1800px; */
  width: calc(100% - 80px);
  height: calc(95vh - 90px);
  background-color: whitesmoke;
  margin: 0 auto;
  position: relative;
  margin-bottom: 20vh;
`;

const SWorks = styled.div`
  /* width: calc(100% - 80px);
  height: calc(95vh - 90px); */
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const SWorksImage = styled.div`
  background-image: url(${about});
`;

const SAboutTextBox = styled.div`
  width: 35%;
  padding-left: 180px;
  padding-top: 250px;
`;

const SAboutText = styled.p`
  font-size: 55px;
  font-style: italic;
  overflow-wrap: break-word;
  width: 100%;
  font-family: "Allison", sans-serif;
`;

const SAboutImageBox = styled.div`
  width: 50%;
`;

const SAboutImage = styled.div`
  /* width: 50%; */
  height: 80vh;
  opacity: 0.8;
  background-image: url(${about});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
