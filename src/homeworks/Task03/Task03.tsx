import { useState } from "react";
import type { ChangeEvent } from "react";
import { Input } from "@components";

const Task03 = () => {
  const [value, setValue] = useState<string>("");
  const [notify, setNotify] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setNotify(getNotify(event.target.value));
  };

  // const handleInput = (event: InputEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  const getNotify = (value: string): string => {
    const text = "The field change event typed correctly";

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
      <p>{notify}</p>
    </>
  );
};

export default Task03;
