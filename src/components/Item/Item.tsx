import type { ReactNode } from "react";
import styles from "./styles.module.css";

type ItemProps = {
  children: ReactNode | null;
  delegated?: any;
};

const Item = (props: ItemProps) => {
  const { children, ...delegated } = props;

  return (
    <li className={styles.item} {...delegated}>
      {children}
    </li>
  );
};

export default Item;
