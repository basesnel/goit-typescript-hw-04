enum Request {
  START = "START_REQUEST",
  PENDING = "PENDING_REQUEST",
  FINISH = "FINISH_REQUEST",
  RESET = "RESET_REQUEST",
}

type Action = {
  type: Request.START | Request.PENDING | Request.FINISH | Request.RESET;
};

type Options = {
  rootMargin: string;
  threshold: number;
  root: HTMLElement | null | undefined;
};

type State = {
  isRequestInProgress: boolean;
  requestStep: "start" | "pending" | "finished" | "idle";
};

type UseRequest = {
  requestState: State;
  startRequest: () => void;
  resetRequest: () => void;
};

export type { Action, Options, State, UseRequest };
export { Request };
