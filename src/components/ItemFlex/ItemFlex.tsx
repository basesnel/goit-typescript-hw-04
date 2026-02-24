import type { ReactNode } from "react";

import styles from "./styles.module.css";

type ItemFlexProps = {
  children: ReactNode;
  spaceBetween?: boolean;
};

const ItemFlex = (props: ItemFlexProps) => {
  const { children, spaceBetween } = props;
  const { flexed, flexedSpaceBetween } = styles;

  const styledFlex = () => (spaceBetween ? flexedSpaceBetween : flexed);

  return <div className={styledFlex()}>{children}</div>;
};

export default ItemFlex;
