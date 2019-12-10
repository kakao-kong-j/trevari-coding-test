import React, { FC } from "react";
import { Category } from "../serviceNavigator/types";
import { ServiceNavigatorElementStyle } from "./style";
import { Badge } from "../badge";
import { Link } from "react-router-dom";

export const ServiceNavigatorElement: FC<Category> = props => {
  const { name, uri, isOpen } = props;
  return (
    <ServiceNavigatorElementStyle>
      <Link to={uri}>
        <span>{name}</span>
        {isOpen && <Badge>OPEN</Badge>}
      </Link>
    </ServiceNavigatorElementStyle>
  );
};
