import React from "react";
import { ServiceNavigator } from "./index";

export default {
  component: ServiceNavigator,
  title: "ServiceNavigator"
};

export const ServiceNavigatorStoryBook = () => {
  return (
    <ServiceNavigator categorys={[{ name: "123", uri: "./", isOpen: false }]} />
  );
};

ServiceNavigatorStoryBook.story = {
  name: "ServiceNavigator Component"
};
