import React, { FC } from "react";
import {
  MeetingCardWarpperStyle,
  MeetingCardCoverImageStyle,
  MeetingCardTypeLabelStyle
} from "./style";
import { MeetingType, Meeting } from "../meetingCard/types";

export const MeetingCardImageSection: FC<{
  meeting: Pick<Meeting, "coverUrl" | "type" | "leader">;
}> = props => {
  const { coverUrl, leader, type } = props.meeting;
  return (
    <MeetingCardWarpperStyle>
      <MeetingCardCoverImageStyle src={coverUrl} />
      {type !== MeetingType.MADE_BY_TOGETHER ? (
        <MeetingCardTypeLabelStyle>
          {type === MeetingType.MADE_BY_TREVART
            ? "트레바리가 디자인한 모임"
            : `클럽장 ${leader && leader.name}님`}
        </MeetingCardTypeLabelStyle>
      ) : null}
    </MeetingCardWarpperStyle>
  );
};
