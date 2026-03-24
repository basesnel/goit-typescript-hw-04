import type { ChildrenProps } from "@tstypes";
import styles from "./styles.module.css";

const Container = (props: ChildrenProps) => {
  const { children } = props;
  const { container } = styles;

  return (
    <div role="presentation" className={container}>
      {children}
    </div>
  );
};

export default Container;
