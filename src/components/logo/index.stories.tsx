import React from "react";
import Logo from "./index";

export default {
  component: Logo,
  title: "Logo"
};

export const LogoStoryBook = () => <Logo />;

LogoStoryBook.story = {
  name: "logo Component"
};
