import { useRequestReducer } from "./useRequestReducer";

export function Task02() {
  const { requestState, startRequest, resetRequest } = useRequestReducer();

  return (
    <div>
      <button onClick={startRequest}>Почати запит</button>
      <button
        onClick={resetRequest}
        disabled={!(requestState.requestStep === "start")}
      >
        Скинути запит
      </button>
      <p>Стан запиту: {requestState.requestStep}</p>
    </div>
  );
}

export default Task02;
