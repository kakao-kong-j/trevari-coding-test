import React, { FC, useEffect } from "react";
import { MeetingPageTopSearch } from "../components/meetingPageTopSearch";
import { MeetingCardGroup } from "../components/meetingCardGroup";
import { useMeetingState, useMeetingDispatch } from "../context/meeting";
import { fetchMeetings } from "../hook/fetchMeetings";
import { useScroll } from "../hook/useScroll";

export const MeetingListPage: FC = () => {
  const meetings = useMeetingState();

  const { height } = useScroll();

  const dispatch = useMeetingDispatch();

  const getData = async () => {
    const fetchedMeetings = await fetchMeetings();
    dispatch({ type: "BATCH_APPEND", meetings: fetchedMeetings });
  };

  useEffect(() => {
    if ((window.innerHeight + height) * 1.2 >= document.body.offsetHeight) {
      getData();
    }
  });

  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto", marginTop: "20px" }}>
      <MeetingPageTopSearch />
      <MeetingCardGroup meetings={meetings} />
    </div>
  );
};
