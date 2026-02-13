import styles from "./styles.module.css";

type GridProps = {
  children: React.ReactNode;
};

const Grid = (props: GridProps) => {
  const { children } = props;

  return <section className={styles.grid}>{children}</section>;
};

export default Grid;
