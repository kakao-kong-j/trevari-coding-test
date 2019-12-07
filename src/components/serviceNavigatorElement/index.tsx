import React, { FC } from "react";
import { Category } from "../serviceNavigator/types";
import { ServiceNavigatorElementStyle } from "./style";

export const ServiceNavigatorElement: FC<Category> = props => {
  const { name, uri } = props;
  return (
    <ServiceNavigatorElementStyle>
      <li>
        <a href={uri}>
          <span>{name}</span>
        </a>
      </li>
    </ServiceNavigatorElementStyle>
  );
};
