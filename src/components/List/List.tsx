import type { ListProps } from "@tstypes";
import styles from "./styles.module.css";

const List = (props: ListProps) => {
  const { message, children } = props;

  return children?.length ? (
    <ul className={styles.list}>{children}</ul>
  ) : (
    <span className={styles.message}>{message}</span>
  );
};

export default List;
