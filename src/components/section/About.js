import React, { useContext } from "react";
import styled from "@emotion/styled";
import about from "../../images/about.jpeg";
// import { keyframes } from "@emotion/react";
// import ScrollRevealContainer from "../ScrollRevealContainer";
import Fade from "react-reveal/Fade";
import { TitleTextContext } from "../../App";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    // rootMargin: "-400px", // ref要素が現れてから50px過ぎたら
    threshold: [0.5, 1.0],
  });

  return (
    <SContainer>
      <SAbout ref={ref}>
        {inView && setTitle("About")}
        <SAboutTextBox>
          <SAboutText>
            <Fade right cascade duration={4000}>
              <SAboutTitle>田原 隼併 / Shunpei Tahara</SAboutTitle>
            </Fade>
            <Fade right cascade duration={3000}>
              1991年兵庫県生まれ
              <br />
              13才で初めてマークアップ言語に触れ、HPを作成。
              <br />
              その一年後にブログを開設し4年間運用する。
              <br />
              DTMでの音楽制作に励み、夢を見て上京。
              4年で結果が出ず、22才で飲食業界に就職。
              <br />
              26才でIT業界へ転職し、クラウドサーバの構築や、
              バックエンド開発等の実務経験を積む。
              <br />
              現在はフロントエンドエンジニアとして都内で活動中。
            </Fade>
          </SAboutText>
        </SAboutTextBox>
        <SAboutImageBox>
          <Fade duration={3000}>
            <SAboutImage></SAboutImage>
          </Fade>
        </SAboutImageBox>
      </SAbout>
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

const SAbout = styled.div`
  /* width: calc(100% - 80px);
  height: calc(95vh - 90px); */
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
`;

const SAboutTextBox = styled.div`
  width: 50%;
`;

const SAboutTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  font-family: "KleeOne";
`;

const SAboutText = styled.p`
  font-size: 18px;
  overflow-wrap: break-word;
  width: 30%;
  font-family: "KleeOne", serif;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
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
