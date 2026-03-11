import type { InputHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  const { input } = styles;

  return <input className={input} {...props} />;
};

export default Input;
