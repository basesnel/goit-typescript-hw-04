import type { ChildrenProps } from "@types";
import styles from "./styles.module.css";

const Grid = (props: ChildrenProps) => {
  const { children } = props;

  return <section className={styles.grid}>{children}</section>;
};

export default Grid;
