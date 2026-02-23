import { cardContext } from "@contexts";

import styles from "./styles.module.css";

type CardProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  const { title, children } = props;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <cardContext.Provider value={true}>{title}</cardContext.Provider>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
