export enum MeetingType {
  MADE_BY_TREVART = "MADE_BY_TREVART",
  MADE_BY_LEADER = "MADE_BY_LEADER",
  MADE_BY_TOGETHER = "MADE_BY_TOGETHER"
}

export interface Meeting {
  clubID: string;
  coverUrl: string;
  leaders?: { name: string }[];
  type: MeetingType;
  name: string;
  contents: {
    author: string;
    title: string;
  }[];
  place: {
    name: string;
  };
  startedAt: Date;
}
