import React, { FC, useState, useEffect } from "react";
import { MeetingPageTopSearch } from "../components/meetingPageTopSearch";
import { MeetingCardGroup } from "../components/meetingCardGroup";
import { useMeetingState, useMeetingDispatch } from "../context/meeting";
import { fetchMeetings } from "../hook/fetchMeetings";
import { useScroll } from "../hook/useScroll";

export const MeetingListPage: FC = () => {
  const meetings = useMeetingState();

  const [loadMore, setLoadMore] = useState(true);
  const { height } = useScroll();

  const getData = async () => {
    const fetchedMeetings = await fetchMeetings();
    dispatch({ type: "BATCH_APPEND", meetings: fetchedMeetings });
  };

  useEffect(() => {
    getData();
  }, [loadMore]);

  const dispatch = useMeetingDispatch();

  useEffect(() => {
    if (height * 1.3 > window.scrollY) {
      getData();
      setLoadMore(true);
    }
  });

  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto", marginTop: "20px" }}>
      <MeetingPageTopSearch />
      <MeetingCardGroup meetings={meetings} />
    </div>
  );
};
