import { Button, FlexBox } from "@components";
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
    <FlexBox direction="column-reverse">
      <FlexBox>
        <Button
          onClick={startRequest}
          disabled={
            requestState.requestStep === Status.START ||
            requestState.requestStep === Status.PENDING
          }
        >
          Почати запит
        </Button>
        <Button
          onClick={resetRequest}
          disabled={requestState.requestStep !== Status.START}
        >
          Скинути запит
        </Button>
      </FlexBox>
      <p>Стан запиту: {requestState.requestStep}</p>
    </FlexBox>
  );
}

export default Task02;
