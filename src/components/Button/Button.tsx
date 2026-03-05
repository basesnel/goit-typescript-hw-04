import styles from "./styles.module.css";

type ButtonProps = {
  children: React.ReactNode | string;
  id?: string | undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  full?: boolean;
  delegated?: any;
};

const Button = (props: ButtonProps) => {
  const {
    children,
    id,
    type = "button",
    onClick,
    disabled,
    full,
    ...delegated
  } = props;
  const { button, fullfilled } = styles;

  const btnStyle = full ? fullfilled : button;

  return (
    <button
      id={id}
      className={btnStyle}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...delegated}
    >
      {children}
    </button>
  );
};

export default Button;
