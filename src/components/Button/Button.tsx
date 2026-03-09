import type { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}

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
