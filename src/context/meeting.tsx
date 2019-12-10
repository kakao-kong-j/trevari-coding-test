import React, { createContext, Dispatch, useReducer, useContext } from "react";
import { Meeting } from "../components/meetingCard/types";

type MeetingState = { meetings: Meeting[]; status: string };

const MeetingStateContext = createContext<MeetingState | undefined>(undefined);

type Action =
  | { type: "APPEND"; meeting: Meeting }
  | { type: "BATCH_APPEND"; meetings: Meeting[] }
  | { type: "CLEAR" }
  | { type: "SEARCH"; text: string };

type MeetingDispatch = Dispatch<Action>;
const MeetingDispatchContext = createContext<MeetingDispatch | undefined>(
  undefined
);

const MeetingReducer = (state: MeetingState, action: Action): MeetingState => {
  switch (action.type) {
    case "APPEND":
      return {
        meetings: state.meetings.concat(action.meeting),
        status: "APPEND"
      };
    case "BATCH_APPEND":
      return {
        meetings: [...state.meetings, ...action.meetings],
        status: "APPEND"
      };
    case "CLEAR":
      return { meetings: [], status: "APPEND" };
    case "SEARCH":
      return {
        meetings: state.meetings.filter(s => s.name.includes(action.text)),
        status: "SEARCH"
      };
    default:
      throw new Error("Unhandled action");
  }
};

export const useMeetingState = () => {
  const state = useContext(MeetingStateContext);
  if (!state) throw new Error("MeetingStateContext not found");
  return state;
};

export const useMeetingDispatch = () => {
  const dispatch = useContext(MeetingDispatchContext);
  if (!dispatch) throw new Error("MeetingProvider not found");
  return dispatch;
};

export const MeetingContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [meetings, dispatch] = useReducer(MeetingReducer, {
    meetings: [],
    status: "APPEND"
  });

  return (
    <MeetingDispatchContext.Provider value={dispatch}>
      <MeetingStateContext.Provider value={meetings}>
        {children}
      </MeetingStateContext.Provider>
    </MeetingDispatchContext.Provider>
  );
};
