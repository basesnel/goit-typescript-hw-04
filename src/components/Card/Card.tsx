import type { CardProps } from "@types";
import { cardContext } from "@contexts";
import styles from "./styles.module.css";

const Card = (props: CardProps) => {
  const { title, children } = props;
  const { card, header, content } = styles;

  return (
    <div className={card}>
      <div className={header}>
        <cardContext.Provider value={true}>{title}</cardContext.Provider>
      </div>
      <div className={content}>{children}</div>
    </div>
  );
};

export default Card;
