import React from "react";
import { MeetingCardDetailSection } from "./index";
import { Meeting } from "../meetingCard/types";

export default {
  component: MeetingCardDetailSection,
  title: "MeetingCardDetailSection"
};

const data: Pick<Meeting, "contents" | "place" | "startedAt" | "name"> = {
  contents: [
    {
      author: "한스 로슬링, 올라 로슬링",
      title: "팩트풀니스(양장본 HardCover)"
    }
  ],
  place: {
    name: "압구정 아지트"
  },
  name: "트레바리 미팅",
  startedAt: new Date("Wed Dec 11 2019 10:40:00 GMT+0000 (UTC)")
};

export const MeetingCardDetailSectionStoryBook = () => {
  return <MeetingCardDetailSection meeting={data} />;
};

MeetingCardDetailSectionStoryBook.story = {
  name: "MeetingCardDetailSection Component"
};
