import { Status } from "@tstypes";
import { Button, Caption, FlexBox } from "@components";
import { useRequestReducer } from "./useRequestReducer";

const Task02 = () => {
  const { requestState, startRequest, resetRequest } = useRequestReducer();

  return (
    <>
      <Caption label="Стан запиту" note={requestState.requestStep} />
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
    </>
  );
};

export default Task02;
