import type { LiHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {}

const Item = (props: ItemProps) => {
  const { children, ...rest } = props;

  return (
    <li className={styles.item} {...rest}>
      {children}
    </li>
  );
};

export default Item;
