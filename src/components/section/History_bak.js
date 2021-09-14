import React, { useContext } from "react";
import styled from "@emotion/styled";
import history from "../../images/history.jpeg";
import Fade from "react-reveal/Fade";

import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../App";

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
        <SHistoryImageBox>
          <Fade duration={3000}>
            <SHistoryImage></SHistoryImage>
          </Fade>
        </SHistoryImageBox>
        <SHistoryTextBox>
          <SHistoryText>
            <Fade right cascade duration={3000}>
              ・2014年4月　飲食業界へ就職
              <br />
              ・2016年4月　バー部門の店長職を務める
              <br />
              スポーツバーとしての需要の構築や貸切パーティーの管理を行う。
              <br />
              ・2017年6月　レストラン部門の店長職を務める
              <br />
              70名規模のスタッフマネジメントやメニュー考案を行う。
              <br />
              ・2018年11月　大手Sier企業に転職
              <br />
              SwiftでIOSの抽選アプリを作成。
              <br />
              ・2019年12月　テスター案件に配属
              <br />
              Java言語のバックエンド開発に携わり、主に検証作業を行う。
              <br />
              ・2019年4月　WEBコーダー案件
              <br />
              コーダーとして静的サイトの作成、保守を行う。
              <br />
              ・2019年7月　大規模案件のフロントエンド、バックエンド開発を担当
              <br />
              JavaScriptでのフロントエンド開発や、Javaを用いたバックエンド開発を行う。
              <br />
              ・2020年3月　WEB系受託チームに配属
              <br />
              複数の運用・保守や請負案件を担当する。
              <br />
              ・2020年8月　クラウドサーバ構築
              <br />
              旧クラウドサーバのクローズに伴い、サーバ移設を担当。
              <br />
              ミドルウェアの構築やDNS移行、Linuxを用いたLBAの構築等を実施。
              <br />
              ・2020年12月　PHPでのバックエンド開発
              <br />
              新規ECサイトのバックエンドをPHP言語にて実施。
              <br />
              ログイン機能や会員管理、問い合わせフォーム等の作成やDB構築を担当。
              <br />
              ・2020年1月　フロントエンドエンジニアを志す
              <br />
              React.jsやTypeScriptの学習を進める。
            </Fade>
          </SHistoryText>
        </SHistoryTextBox>
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
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const SHistoryTextBox = styled.div`
  width: 50%;
`;

const SHistoryText = styled.p`
  font-size: 15px;
  /* font-style: italic; */
  overflow-wrap: break-word;
  /* width: 100%; */
  font-family: "KleeOne", serif;
  line-height: 1;
  padding-top: 1vh;
  padding-left: 13vw;
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
`;
