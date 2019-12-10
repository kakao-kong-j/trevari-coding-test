import React, { FC } from "react";
import { MeetingPageTopSearch } from "../components/meetingPageTopSearch";
import { MeetingCardGroup } from "../components/meetingCardGroup";
import { useMeetingState } from "../context/meeting";

export const MeetingListPage: FC = () => {
  const meetings = useMeetingState();
  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto", marginTop: "20px" }}>
      <MeetingPageTopSearch />
      <MeetingCardGroup meetings={meetings} />
    </div>
  );
};
