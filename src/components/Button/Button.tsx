import type { ButtonProps } from "@types";
import styles from "./styles.module.css";

const Button = (props: ButtonProps) => {
  const { children, full, ...rest } = props;
  const { button, fullfilled } = styles;

  const btnStyle = full ? fullfilled : button;

  return (
    <button className={btnStyle} {...rest}>
      {children}
    </button>
  );
};

export default Button;
