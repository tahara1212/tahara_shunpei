import React, { useContext } from "react";
import styled from "@emotion/styled";
import history from "../../images/history.jpeg";
import Fade from "react-reveal/Fade";

import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../App";
import { HistoryText } from "../molecules/HistoryText";

export const History = () => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });
  return (
    <SContainer>
      <SHistory ref={ref}>
        {inView && setTitle("History")}
        <SHistoryTextBox>
          <HistoryText />
        </SHistoryTextBox>
        <SHistoryImageBox>
          <Fade duration={3000}>
            <SHistoryImage></SHistoryImage>
          </Fade>
        </SHistoryImageBox>
      </SHistory>
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
  margin-bottom: 10vh;
`;

const SHistory = styled.div`
  /* width: calc(100% - 80px);
  height: calc(95vh - 90px); */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const SHistoryTextBox = styled.div`
  width: 50%;
  height: 94%;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: whitesmoke;
  }
`;

const SHistoryImageBox = styled.div`
  width: 50%;
`;

const SHistoryImage = styled.div`
  /* width: 50%; */
  height: 80vh;
  opacity: 0.8;
  background-image: url(${history});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;
