import React, { FC } from "react";
import { MeetingPageTopSearchStyle } from "./style";
import { PrimaryButton } from "../primaryButton";
import { SearchInput } from "../searchInput";

export const MeetingPageTopSearch: FC = () => {
  return (
    <MeetingPageTopSearchStyle>
      <PrimaryButton value="독서모임 캘린더 바로가기" />
      <SearchInput buttonValue="검색" placeholder="클럽명 검색" />
    </MeetingPageTopSearchStyle>
  );
};
