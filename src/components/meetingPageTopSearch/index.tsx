import React, { FC } from "react";
import {
  MeetingPageTopSearchStyle,
  MeetingPageCalenderButtonStyle
} from "./style";
import { SearchInput } from "../searchInput";
import { colors } from "../../common/color";
import { useInput } from "../../hook/useInput";

export const MeetingPageTopSearch: FC = () => {
  const input = useInput("");
  return (
    <MeetingPageTopSearchStyle>
      <div style={{ color: colors.GRAY_123 }}>
        내 일정에 맞는 놀러가기 클럽을 찾으신다면?
      </div>
      <MeetingPageCalenderButtonStyle>
        독서모임 캘린더 바로가기
      </MeetingPageCalenderButtonStyle>
      <SearchInput buttonValue="검색" placeholder="클럽명 검색" {...input} />
    </MeetingPageTopSearchStyle>
  );
};
