import React, { FC, useEffect } from "react";
import { MeetingPageTopSearch } from "../components/meetingPageTopSearch";
import { MeetingCardGroup } from "../components/meetingCardGroup";
import { useMeetingState, useMeetingDispatch } from "../context/meeting";
import { fetchMeetings } from "../common/fetchMeetings";
import { useScroll } from "../hook/useScroll";

export const MeetingListPage: FC = () => {
  const state = useMeetingState();

  const { height } = useScroll();

  const dispatch = useMeetingDispatch();

  const getData = async () => {
    if (state.status === "APPEND") {
      const fetchedMeetings = await fetchMeetings();
      dispatch({ type: "BATCH_APPEND", meetings: fetchedMeetings });
    }
  };

  useEffect(() => {
    if ((window.innerHeight + height) * 1.2 >= document.body.offsetHeight) {
      getData();
    }
  });

  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto", marginTop: "20px" }}>
      <MeetingPageTopSearch />
      <MeetingCardGroup meetings={state.meetings} />
    </div>
  );
};
