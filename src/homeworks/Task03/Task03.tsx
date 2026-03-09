import React, { useState } from "react";
import { Input } from "@components";

const Task03 = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <Input type="text" value={value} onChange={handleChange} />;
};

export default Task03;
