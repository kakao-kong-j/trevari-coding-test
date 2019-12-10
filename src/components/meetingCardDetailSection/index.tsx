import React, { FC } from "react";

import {
  MeetingCardNameStyle,
  MeetingCardContentsStyle,
  MeetingCardDescriptionStyle,
  MeetingCardDetailSectionStyle
} from "./style";
import { convertLocalTime } from "../../common/time";
import { Meeting } from "../meetingCard/types";

export const MeetingCardDetailSection: FC<{
  meeting: Pick<Meeting, "contents" | "place" | "startedAt">;
}> = props => {
  const { contents, place, startedAt } = props.meeting;
  return (
    <MeetingCardDetailSectionStyle>
      <MeetingCardNameStyle>{name}</MeetingCardNameStyle>
      <MeetingCardContentsStyle>
        {contents.length === 1
          ? `${contents[0].author}, 『${contents[0].title}』`
          : `${contents[0].author}, 『${contents[0].title}』 외 ${contents.length}개의 읽을거리`}
      </MeetingCardContentsStyle>
      <MeetingCardDescriptionStyle>
        <div>{place.name}</div>
        <div>{convertLocalTime(startedAt)}</div>
      </MeetingCardDescriptionStyle>
    </MeetingCardDetailSectionStyle>
  );
};
