import React, { createContext, Dispatch, useReducer, useContext } from "react";
import { Faq } from "../components/faqDocumentGroup/types";

type FaqState = Faq[];

const FaqStateContext = createContext<FaqState | undefined>(undefined);

type Action =
  | { type: "APPEND"; faq: Faq }
  | { type: "BATCH_APPEND"; faqs: Faq[] }
  | { type: "CLEAR" };

type FaqDispatch = Dispatch<Action>;
const FaqDispatchContext = createContext<FaqDispatch | undefined>(undefined);

const FaqReducer = (state: FaqState, action: Action): FaqState => {
  switch (action.type) {
    case "APPEND":
      return state.concat(action.faq);
    case "BATCH_APPEND":
      return [...state, ...action.faqs];
    case "CLEAR":
      return [];
    default:
      throw new Error("Unhandled action");
  }
};

export const useFaqState = () => {
  const state = useContext(FaqStateContext);
  if (!state) throw new Error("FaqProvider not found");
  return state;
};

export const useFaqDispatch = () => {
  const dispatch = useContext(FaqDispatchContext);
  if (!dispatch) throw new Error("FaqProvider not found");
  return dispatch;
};

export const FaqContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [faqs, dispatch] = useReducer(FaqReducer, []);

  return (
    <FaqDispatchContext.Provider value={dispatch}>
      <FaqStateContext.Provider value={faqs}>
        {children}
      </FaqStateContext.Provider>
    </FaqDispatchContext.Provider>
  );
};
