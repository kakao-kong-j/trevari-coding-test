import React, { FC } from "react";
import { Category } from "../serviceNavigator/types";
import { ServiceNavigatorElementStyle } from "./style";
import { Badge } from "../badge";

export const ServiceNavigatorElement: FC<Category> = props => {
  const { name, uri, isOpen } = props;
  return (
    <ServiceNavigatorElementStyle>
      <a href={uri}>
        <span>{name}</span>
        {isOpen && <Badge>OPEN</Badge>}
      </a>
    </ServiceNavigatorElementStyle>
  );
};
