import type { InputHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  caption?: string;
}

const Input = (props: InputProps) => {
  const { caption, ...rest } = props;
  const { label, span, input } = styles;

  return (
    <label className={label}>
      <span className={span}>{caption}:</span>
      <input className={input} size={4} {...rest} />
    </label>
  );
};

export default Input;
