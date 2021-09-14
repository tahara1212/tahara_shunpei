import React, { useContext } from "react";
import styled from "@emotion/styled";
import works01 from "../../images/works01.jpg";
import works02 from "../../images/works02.png";
import works03 from "../../images/works03.jpeg";
import works04 from "../../images/works04.jpeg";
// import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../App";

export const Works = () => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });
  return (
    <SContainer>
      <SWorks ref={ref}>
        {inView && setTitle("Works")}
        <SFigure>
          <SImg src={works01} alt="work1" />
          <Sfigcaption>
            <SH2>React + Gatsby</SH2>
            <SP>
              Gatsby.jsを使用したポートフォリオサイト。
              <br />
              HTML5 UPのテンプレートを使用。
            </SP>
          </Sfigcaption>
        </SFigure>
        <SFigure>
          <SImg src={works02} alt="work1" />
          <Sfigcaption>
            <SH2>React + TypeScript</SH2>
            <SP>
              TypeScriptを使用したユーザー管理アプリ。
              <br />
              フロントのみの実装。ID1~10でログイン。
            </SP>
          </Sfigcaption>
        </SFigure>
        <SFigure>
          <SImg src={works03} alt="work1" />
          <Sfigcaption>
            <SH2>Framer Motion & React Reveal</SH2>
            <SP>
              Gatsby.jsを使用したポートフォリオサイト。
              <br />
              HTML5 UPのテンプレートを使用。
            </SP>
          </Sfigcaption>
        </SFigure>
        <SFigure>
          <SImg src={works04} alt="work1" />
          <Sfigcaption>
            <SH2>React + Gatsby</SH2>
            <SP>
              Gatsby.jsを使用したポートフォリオサイト。
              <br />
              HTML5 UPのテンプレートを使用。
            </SP>
          </Sfigcaption>
        </SFigure>
      </SWorks>
    </SContainer>
  );
};

const SFigure = styled.figure`
  position: relative;
  width: 35%;
  height: 40%;
  cursor: pointer;
  background: #3085a3;
  background: linear-gradient(45deg, #22682a 0%, #9b4a1b 40%, #3a342a 100%);
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    /* background-color: red; */
    border: 1px solid #fff;
    opacity: 0.2;
    transform: scale(0);
    transition: opacity 0.55s, transform 0.55s;
    z-index: 1;
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
    & img {
      transform: scale(1.2);
    }
    & figcaption {
      background-color: rgba(46, 28, 117, 0.5);
      /* background-color: rgba(0, 11, 18, 0.5); */
    }

    & h2 {
      /* top: 30%; */
      transform: translate(-50%, -150%);
    }

    & p {
      opacity: 1;
      transform: translate(-50%, -10%) scale(1);
    }
  }
`;

const SImg = styled.img`
  max-width: 100%;
  min-height: 100%;
  transform: scale(1);
  transition: transform 0.55s;
`;

const Sfigcaption = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 28, 117, 0.2);
  /* background-color: rgba(0, 11, 18, 0.2); */
  backface-visibility: hidden;
  transition: background-color 0.55s;
  color: #fff;
`;

const SH2 = styled.h2`
  background-color: transparent;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.55s;
`;

const SP = styled.p`
  opacity: 0;
  width: 80%;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.55s, opacity 0.8s;
  font-family: "KleeOne", serif;
`;

const SContainer = styled.div`
  /* width: 100%;
  height: 1800px; */
  width: calc(100% - 80px);
  height: calc(95vh - 90px);
  /* background-color: red; */
  margin: 0 auto;
  position: relative;
  margin-bottom: 10vh;
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
