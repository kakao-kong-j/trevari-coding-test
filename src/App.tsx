import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./layout/header";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: noto sans kr;
    }
    a {
      text-decoration: none;
      color: inherit
    }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
    </div>
  );
};

export default App;
