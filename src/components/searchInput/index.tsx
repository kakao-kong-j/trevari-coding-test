import React, { FC } from "react";
import { ButtonStyle, InputStyle, GroupStyle } from "./style";
import { SearchInputProrps } from "./types";
import { useInput } from "../../hook/useInput";

export const SearchInput: FC<SearchInputProrps> = props => {
  const { buttonValue, placeholder } = props;
  const input = useInput("");
  return (
    <GroupStyle>
      <InputStyle placeholder={placeholder} {...input} />
      <ButtonStyle>{buttonValue}</ButtonStyle>
    </GroupStyle>
  );
};
