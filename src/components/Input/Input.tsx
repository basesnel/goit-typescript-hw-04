import styles from "./styles.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  const { input } = styles;

  return <input className={input} {...props} />;
};

export default Input;
