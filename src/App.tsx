import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./layout/header";
import { MeetingListPage } from "./page/meetingList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CustomerServicePage } from "./page/customerService";
import { MeetingContextProvider } from "./context/meeting";
import { FaqContextProvider } from "./context/faq";

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
        <MeetingContextProvider>
          <FaqContextProvider>
            <Switch>
              <Route exact path="/">
                <MeetingListPage />
              </Route>
              <Route exact path="/meetings">
                <MeetingListPage />
              </Route>
              <Route exact path="/cs">
                <CustomerServicePage />
              </Route>
            </Switch>
          </FaqContextProvider>
        </MeetingContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
