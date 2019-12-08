import React from "react";
import { ServiceNavigatorElement } from "./index";

export default {
  component: ServiceNavigatorElement,
  title: "ServiceNavigatorElement"
};

export const ServiceNavigatorElementStoryBook = () => {
  return <ServiceNavigatorElement name="test" uri="/." />;
};

ServiceNavigatorElementStoryBook.story = {
  name: "ServiceNavigatorElement Component"
};
