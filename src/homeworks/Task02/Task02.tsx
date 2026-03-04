import { useRequestReducer } from "./useRequestReducer";

enum Status {
  IDLE = "idle",
  START = "start",
  PENDING = "pending",
  FINISHED = "finished",
}

export function Task02() {
  const { requestState, startRequest, resetRequest } = useRequestReducer();

  return (
    <div>
      <button
        onClick={startRequest}
        disabled={
          requestState.requestStep === Status.START ||
          requestState.requestStep === Status.PENDING
        }
      >
        Почати запит
      </button>
      <button
        onClick={resetRequest}
        disabled={requestState.requestStep !== Status.START}
      >
        Скинути запит
      </button>
      <p>Стан запиту: {requestState.requestStep}</p>
    </div>
  );
}

export default Task02;
