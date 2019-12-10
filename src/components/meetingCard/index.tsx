import React, { FC } from "react";
import {
  MeetingCardStyle,
  MeetingCardAnchorStyle,
  MeetingCardWarpperStyle,
  MeetingCardCoverImageStyle,
  MeetingCardTypeLabelStyle,
  MeetingCardNameStyle,
  MeetingCardDescriptionStyle,
  MeetingCardContentsStyle
} from "./style";
import { Meeting, MeetingType } from "./types";
import { convertLocalTime } from "../../common/time";

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

export const MeetingCardDetailSection: FC<{
  meeting: Pick<Meeting, "contents" | "place" | "startedAt">;
}> = props => {
  const { contents, place, startedAt } = props.meeting;
  return (
    <div style={{ margin: "8px 0px" }}>
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
    </div>
  );
};

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
