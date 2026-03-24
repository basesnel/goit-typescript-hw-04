import type { Action, State, UseRequest } from "@tstypes";
import { useReducer, useRef } from "react";

const initialState: State = {
  isRequestInProgress: false,
  requestStep: "idle",
};

const requestReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START_REQUEST":
      return { ...state, isRequestInProgress: true, requestStep: "start" };
    case "PENDING_REQUEST":
      return { ...state, isRequestInProgress: true, requestStep: "pending" };
    case "FINISH_REQUEST":
      return { ...state, isRequestInProgress: false, requestStep: "finished" };
    case "RESET_REQUEST":
      return { ...state, isRequestInProgress: false, requestStep: "idle" };
    default:
      return state;
  }
};

const useRequestReducer = (): UseRequest => {
  const [requestState, requestDispatch] = useReducer(
    requestReducer,
    initialState,
  );

  const timerID = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const startRequest = (): void => {
    requestDispatch({ type: "START_REQUEST" });
    timerID.current = setTimeout(() => {
      requestDispatch({ type: "PENDING_REQUEST" });
      setTimeout(() => {
        requestDispatch({ type: "FINISH_REQUEST" });
        clearTimeout(timerID.current);
        timerID.current = undefined;
      }, 2000);
    }, 2000);
  };

  const resetRequest = (): void => {
    if (requestState.requestStep === "start") {
      clearTimeout(timerID.current);
      requestDispatch({ type: "RESET_REQUEST" });
    }
  };

  return { requestState, startRequest, resetRequest };
};

export { useRequestReducer };
