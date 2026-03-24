import type { ItemProps } from "@tstypes";
import styles from "./styles.module.css";

const Item = (props: ItemProps) => {
  const { children, ...rest } = props;

  return (
    <li className={styles.item} {...rest}>
      {children}
    </li>
  );
};

export default Item;
