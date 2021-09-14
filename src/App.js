import React, { useState, createContext } from "react";
import styled from "@emotion/styled";

import { Header } from "./components/layout/Header";
import { Title } from "./components/layout/Title";
import { Main } from "./components/section/Main";
import { About } from "./components/section/About";
import { History } from "./components/section/History";
import { Works } from "./components/section/Works";
import { Skils } from "./components/section/Skils";
import { Divider } from "./components/atoms/Divider";
import { Blog } from "./components/section/Blog";
import { Contact } from "./components/section/Contact";

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
        <Divider />
        <About />
        <Divider />
        <History />
        <Divider />
        <Works />
        <Divider />
        <Skils />
        <Divider />
        <Contact />
      </SMainContent>
    </TitleTextContext.Provider>
  );
};

const SMainContent = styled.div`
  padding-top: 80px;
  margin: 0 auto;
`;

export default App;
