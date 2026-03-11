import { useState } from "react";
import type { ChangeEvent } from "react";
import { Input } from "@components";

const Task03 = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Input
      caption="Input field"
      type="text"
      value={value}
      placeholder="Type something..."
      onChange={handleChange}
    />
  );
};

export default Task03;
