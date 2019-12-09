import styled from "styled-components";
import { colors } from "../../common/color";

export const MeetingCardStyle = styled.div``;

export const MeetingCardTypeLabelStyle = styled.div`
  background: rgb(255, 137, 6);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  color: white;
  font-size: 14px;
  opacity: 0.9;
  padding: 2px;
  position: absolute;
  text-align: center;
  top: 0px;
  width: 100%;
`;

export const MeetingCardCoverImageStyle = styled.img`
  bottom: -100%;
  font-size: 20px;
  left: -100%;
  margin: auto;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  right: -100%;
  top: -100%;
  width: 100%;
`;

export const MeetingCardWarpperStyle = styled.div`
  overflow: hidden;
  padding-top: 52%;
  position: relative;
  width: 100%;
`;

export const MeetingCardAnchorStyle = styled.a`
  margin: 0px 8px 32px;
  width: 100%;
`;

export const MeetingCardNameStyle = styled.div`
  font-weight: 800;
  color: ${colors.GRAY_123};
`;

export const MeetingCardDescriptionStyle = styled.div`
  color: ${colors.GRAY_123};
  font-size: 14px;
  margin-top: 4px;
`;

export const MeetingCardContentsStyle = styled.div`
  font-weight: 600;
`;
