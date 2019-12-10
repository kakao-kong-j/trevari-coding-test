import React, { FC } from "react";
import { MeetingPageTopSearch } from "../components/meetingPageTopSearch";
import { MeetingCardGroup } from "../components/meetingCardGroup";
import { MeetingType } from "../components/meetingCard/types";

export const MeetingListPage: FC = () => {
  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto", marginTop: "20px" }}>
      <MeetingPageTopSearch />
      <MeetingCardGroup
        meetings={new Array(50).fill({
          coverUrl:
            "https://s3.ap-northeast-2.amazonaws.com/file.trevari.co.kr/efb0fc6b-d11c-458c-aadd-8b95598882cf.a6bcac4e-04d2-4b38-98ad-4fce2a1f8a74_club%20copy%204.jpg",
          name: "무경계-고래",
          type: MeetingType.MADE_BY_LEADER,
          clubID: "39e6389e-9a8b-4b1e-8ea7-3423b0ff8ca3",
          leader: { name: "홍진호" },
          contents: [
            {
              author: "한스 로슬링, 올라 로슬링",
              title: "팩트풀니스(양장본 HardCover)"
            }
          ],
          place: {
            name: "압구정 아지트"
          },
          startedAt: new Date("Wed Dec 11 2019 10:40:00 GMT+0000 (UTC)")
        })}
      />
    </div>
  );
};
