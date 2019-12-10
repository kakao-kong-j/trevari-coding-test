import React from "react";
import { MeetingCardImageSection } from "./index";
import { Meeting, MeetingType } from "../meetingCard/types";

export default {
  component: MeetingCardImageSection,
  title: "MeetingCardImageSection"
};

const data: Pick<Meeting, "coverUrl" | "leaders" | "type"> = {
  coverUrl:
    "https://s3.ap-northeast-2.amazonaws.com/file.trevari.co.kr/efb0fc6b-d11c-458c-aadd-8b95598882cf.a6bcac4e-04d2-4b38-98ad-4fce2a1f8a74_club%20copy%204.jpg",
  type: MeetingType.MADE_BY_LEADER,
  leaders: [{ name: "홍진호" }]
};

export const MeetingCardImageSectionStoryBook = () => {
  return <MeetingCardImageSection meeting={data} />;
};

MeetingCardImageSectionStoryBook.story = {
  name: "MeetingCardImageSection Component"
};
