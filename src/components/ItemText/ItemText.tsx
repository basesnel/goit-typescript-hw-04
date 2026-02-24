import styles from "./styles.module.css";

type ItemText = {
  children: string | number;
};

const ItemText = (props: ItemText) => {
  const { children } = props;

  return <span className={styles.content}>{children}</span>;
};

export default ItemText;
