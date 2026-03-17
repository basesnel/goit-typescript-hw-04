import type { ItemTextProps } from "@types";
import styles from "./styles.module.css";

const ItemText = (props: ItemTextProps) => {
  const { children } = props;

  return <span className={styles.content}>{children}</span>;
};

export default ItemText;
