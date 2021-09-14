import React, { useContext } from "react";
import styled from "@emotion/styled";
import works01 from "../../images/works01.jpg";
import works02 from "../../images/works02.png";
import works03 from "../../images/works03.jpeg";
import works04 from "../../images/works04.jpeg";
// import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../App";

export const Blog = () => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });
  return (
    <SContainer>
      <SWorks ref={ref}>
        {inView && setTitle("Blog")}
        <SWorksImageBox>
          <SWorksImage1></SWorksImage1>
        </SWorksImageBox>
        <SWorksImageBox>
          <SWorksImage2></SWorksImage2>
        </SWorksImageBox>
        <SWorksImageBox>
          <SWorksImage3></SWorksImage3>
        </SWorksImageBox>
        <SWorksImageBox>
          <SWorksImage4></SWorksImage4>
        </SWorksImageBox>
      </SWorks>
    </SContainer>
  );
};

const SContainer = styled.div`
  /* width: 100%;
  height: 1800px; */
  width: calc(100% - 80px);
  height: calc(95vh - 90px);
  /* background-color: red; */
  margin: 0 auto;
  position: relative;
  margin-bottom: 20vh;
`;

const SWorks = styled.div`
  /* width: calc(100% - 80px); */
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  /* background-color: red; */
  align-items: center;
`;

const SWorksImageBox = styled.div`
  width: 35%;
  height: 40%;
  cursor: pointer;
  overflow: hidden;
  background-color: black;
  /* transform: scale(1.5); */
`;

const SWorksImage1 = styled.div`
  background-image: url(${works01});
  background-size: cover;
  /* overflow: hidden; */
  width: 100%;
  height: 100%;
  /* cursor: pointer; */
  transform: scale(1.5);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1) rotate(9deg);
  }
`;

const SWorksImage2 = styled(SWorksImage1)`
  background-image: url(${works02});
`;

const SWorksImage3 = styled(SWorksImage1)`
  background-image: url(${works03});
`;

const SWorksImage4 = styled(SWorksImage1)`
  background-image: url(${works04});
`;
