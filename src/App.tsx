import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./layout/header";
import { MeetingListPage } from "./page/meetingList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <MeetingListPage />
          </Route>
          <Route exact path="/meetings">
            <MeetingListPage />
          </Route>
          <Route exact path="/cs">
            <div />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
