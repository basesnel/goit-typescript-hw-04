import type { GridProps } from "@types";
import styles from "./styles.module.css";

const Grid = (props: GridProps) => {
  const { children } = props;

  return <section className={styles.grid}>{children}</section>;
};

export default Grid;
