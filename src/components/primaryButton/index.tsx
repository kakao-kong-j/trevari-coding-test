import React, { FC, CSSProperties } from "react";
import { PrimaryButtonStyle } from "./style";

export const PrimaryButton: FC<{
  value: string;
  uri?: string;
  style?: CSSProperties;
}> = props => {
  const { style, value } = props;
  return <PrimaryButtonStyle style={style}>{value}</PrimaryButtonStyle>;
};
