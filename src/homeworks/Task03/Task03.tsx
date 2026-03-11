import { useState } from "react";
import type { ChangeEvent } from "react";
import { Caption, Input } from "@components";

const Task03 = () => {
  const [value, setValue] = useState<string>("");
  const [notify, setNotify] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setNotify(getNotify(event.target.value));
  };

  const getNotify = (value: string): string => {
    const text = "The event change is correctly typed";

    return text.substring(0, value.length);
  };

  return (
    <>
      <Input
        caption="Input field"
        type="text"
        value={value}
        placeholder="Type something..."
        onChange={handleChange}
      />
      <Caption>
        Процес: <b>{notify}</b>
      </Caption>{" "}
    </>
  );
};

export default Task03;
