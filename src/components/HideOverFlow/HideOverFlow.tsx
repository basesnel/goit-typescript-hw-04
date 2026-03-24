import type { ChildrenProps } from "@tstypes";
import styles from "./styles.module.css";

const HideOverflow = (props: ChildrenProps) => {
  const { children } = props;
  const { hideOverflow } = styles;

  return <div className={hideOverflow}>{children}</div>;
};

export default HideOverflow;
