import type { InputProps } from "./type";
import styles from "./styles.module.css";

const Input = (props: InputProps) => {
  const { label, ...rest } = props;
  const { field, span, input } = styles;

  return (
    <label className={field}>
      <span className={span}>{label}:</span>
      <input className={input} size={4} {...rest} />
    </label>
  );
};

export default Input;
