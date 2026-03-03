import { useReducer, useRef } from "react";

type State = {
  isRequestInProgress: boolean;
  requestStep: "start" | "pending" | "finished" | "idle";
};

type Action = {
  type:
    | "START_REQUEST"
    | "PENDING_REQUEST"
    | "FINISH_REQUEST"
    | "RESET_REQUEST";
};

const initialState: State = {
  isRequestInProgress: false,
  requestStep: "idle",
};

function requestReducer(state: State, action: Action): State {
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
}

const useRequestReducer = () => {
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
