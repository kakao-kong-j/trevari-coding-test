import React from "react";
import { Header } from "./index";

export default {
  component: Header,
  title: "Header"
};

export const HeaderStroyBook = () => {
  return <Header />;
};

HeaderStroyBook.story = {
  name: "Header Component"
};
