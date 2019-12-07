import React from "react";
import Logo from "./index";

export default {
  component: Logo,
  title: "Logo"
};

export const logo = () => <Logo />;

logo.story = {
  name: "logo Component"
};
