import React, { FC } from "react";
import { ServiceNavigatorElement } from "../serviceNavigatorElement";
import { ServiceNavigatorProps } from "./types";
import { ServiceNavigatorStyle } from "./style";

export const ServiceNavigator: FC<ServiceNavigatorProps> = ({ categorys }) => {
  const serviceNavigatorElements = categorys.map(category => {
    const { isOpen = false, name, uri } = category;
    return <ServiceNavigatorElement name={name} uri={uri} isOpen={isOpen} />;
  });
  return (
    <ServiceNavigatorStyle>
      <ul style={{ position: "static", display: "inline-block", top: 0 }}>
        {serviceNavigatorElements}
      </ul>
    </ServiceNavigatorStyle>
  );
};
