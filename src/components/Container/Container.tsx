import type { ContainerProps } from "@types";
import styles from "./styles.module.css";

const Container = (props: ContainerProps) => {
  const { children } = props;
  const { container } = styles;

  return (
    <div role="presentation" className={container}>
      {children}
    </div>
  );
};

export default Container;
