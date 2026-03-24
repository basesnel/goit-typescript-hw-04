import type { Action, State, UseRequest } from "@tstypes";
import { Request, Status } from "@tstypes";
import { useReducer, useRef } from "react";

const initialState: State = {
  isRequestInProgress: false,
  requestStep: "idle",
};

const requestReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Request.START:
      return { ...state, isRequestInProgress: true, requestStep: Status.START };
    case Request.PENDING:
      return {
        ...state,
        isRequestInProgress: true,
        requestStep: Status.PENDING,
      };
    case Request.FINISH:
      return {
        ...state,
        isRequestInProgress: false,
        requestStep: Status.FINISHED,
      };
    case Request.RESET:
      return { ...state, isRequestInProgress: false, requestStep: Status.IDLE };
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
    requestDispatch({ type: Request.START });
    timerID.current = setTimeout(() => {
      requestDispatch({ type: Request.PENDING });
      setTimeout(() => {
        requestDispatch({ type: Request.FINISH });
        clearTimeout(timerID.current);
        timerID.current = undefined;
      }, 2000);
    }, 2000);
  };

  const resetRequest = (): void => {
    if (requestState.requestStep === Status.START) {
      clearTimeout(timerID.current);
      requestDispatch({ type: Request.RESET });
    }
  };

  return { requestState, startRequest, resetRequest };
};

export { useRequestReducer };
