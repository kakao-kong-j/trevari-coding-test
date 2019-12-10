import React, { FC } from "react";
import { MeetingCardStyle, MeetingCardAnchorStyle } from "./style";
import { Meeting } from "./types";
import { MeetingCardImageSection } from "../meetingCardImageSection";
import { MeetingCardDetailSection } from "../meetingCardDetailSection";

export const MeetingCard: FC<{ meeting: Meeting }> = props => {
  const { clubID } = props.meeting;
  return (
    <MeetingCardStyle key={clubID}>
      <MeetingCardAnchorStyle>
        <MeetingCardImageSection meeting={props.meeting} />
        <MeetingCardDetailSection meeting={props.meeting} />
      </MeetingCardAnchorStyle>
    </MeetingCardStyle>
  );
};
