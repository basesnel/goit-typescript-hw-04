// import H from "@components/H";
import { H } from "@components";
import { cardContext } from "@contexts";

import styles from "./styles.module.css";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  const { title, children } = props;

  return (
    <div className={styles.card}>
      <cardContext.Provider value={true}>
        <div className={styles.header}>
          <H level={2}>{title}</H>
        </div>
        <div className={styles.content}>{children}</div>
      </cardContext.Provider>
    </div>
  );
};

export default Card;
