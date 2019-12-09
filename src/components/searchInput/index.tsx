import React, { FC } from "react";
import { ButtonStyle, InputStyle, GroupStyle } from "./style";
import { SearchInputProrps } from "./types";

export const SearchInput: FC<SearchInputProrps> = props => {
  const { buttonValue, placeholder } = props;
  return (
    <GroupStyle>
      <InputStyle placeholder={placeholder} />
      <ButtonStyle>{buttonValue}</ButtonStyle>
    </GroupStyle>
  );
};
