import React, { FC } from "react";
import { ButtonStyle, InputStyle, GroupStyle } from "./style";
import { SearchInputProrps } from "./types";
import { useInput } from "../../hook/useInput";
import { useMeetingDispatch } from "../../context/meeting";

export const SearchInput: FC<SearchInputProrps> = props => {
  const dispatch = useMeetingDispatch();
  const input = useInput("");
  const onSubmit = () => {
    if (input.value) {
      dispatch({ type: "SEARCH", text: input.value });
    }
  };
  const { buttonValue, placeholder } = props;
  return (
    <GroupStyle>
      <InputStyle placeholder={placeholder} {...input} />
      <ButtonStyle onClick={onSubmit}>{buttonValue}</ButtonStyle>
    </GroupStyle>
  );
};
