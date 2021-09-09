// import styled from '@emotion/styled';
import { Main } from "./components/section/Main";
import { Header } from "./components/layout/Header";
import { About } from "./components/section/About";

import React, { useState, createContext } from "react";
import styled from "@emotion/styled";
import { History } from "./components/section/History";
import { Works } from "./components/section/Works";

// import { useInView } from "react-intersection-observer";
import { Title } from "./components/layout/Title";

export const TitleTextContext = createContext();

const App = () => {
  const [title, setTitle] = useState("Welcome");
  const value = {
    title,
    setTitle,
  };
  console.log(title);
  return (
    <TitleTextContext.Provider value={value}>
      <Header />
      <SMainContent>
        <Title title={title} />
        <Main />
        <About />
        <History />
        <Works />
      </SMainContent>
    </TitleTextContext.Provider>
  );
};

const SMainContent = styled.div`
  padding-top: 80px;
  margin: 0 auto;
`;

export default App;
