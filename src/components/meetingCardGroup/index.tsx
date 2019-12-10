import React, { FC } from "react";
import { Meeting } from "../meetingCard/types";
import { MeetingCardGroupStyle } from "./style";
import { MeetingCard } from "../meetingCard";

export const MeetingCardGroup: FC<{ meetings: Meeting[] }> = props => {
  const { meetings } = props;
  return (
    <MeetingCardGroupStyle>
      {meetings.map((meeting, index) => (
        <MeetingCard key={index} meeting={meeting} />
      ))}
    </MeetingCardGroupStyle>
  );
};
