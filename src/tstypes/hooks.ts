type Action = {
  type:
    | "START_REQUEST"
    | "PENDING_REQUEST"
    | "FINISH_REQUEST"
    | "RESET_REQUEST";
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
