import React, { createContext, Dispatch, useReducer, useContext } from "react";
import { Meeting } from "../components/meetingCard/types";

type MeetingState = Meeting[];

const MeetingStateContext = createContext<MeetingState | undefined>(undefined);

type Action =
  | { type: "APPEND"; meeting: Meeting }
  | { type: "BATCH_APPEND"; meetings: Meeting[] }
  | { type: "CLEAR" };

type MeetingDispatch = Dispatch<Action>;
const MeetingDispatchContext = createContext<MeetingDispatch | undefined>(
  undefined
);

const MeetingReducer = (state: MeetingState, action: Action): MeetingState => {
  switch (action.type) {
    case "APPEND":
      return state.concat(action.meeting);
    case "BATCH_APPEND":
      return [...state, ...action.meetings];
    case "CLEAR":
      return [];
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
  const [meetings, dispatch] = useReducer(MeetingReducer, []);

  return (
    <MeetingDispatchContext.Provider value={dispatch}>
      <MeetingStateContext.Provider value={meetings}>
        {children}
      </MeetingStateContext.Provider>
    </MeetingDispatchContext.Provider>
  );
};
