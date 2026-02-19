import { useContext } from "react";
// import { mainContext, cardContext } from "../../contexts";
import { cardContext, mainContext } from "@contexts/index";

import styles from "./styles.module.css";

type Hprops = {
  level: number;
  children: React.ReactNode;
};

const H = (props: Hprops) => {
  const { level, children } = props;
  const {
    heading01,
    heading02,
    heading03,
    heading04,
    heading05,
    heading06,
    pageTitle,
    cardTitle,
    cardTitle03,
    cardTitle04,
  } = styles;

  const isMain = useContext(mainContext);
  const isCard = useContext(cardContext);

  switch (level) {
    case 0:
      throw Error("Heading must be inside a section!");

    case 1:
      return <h1 className={isMain ? pageTitle : heading01}>{children}</h1>;

    case 2:
      return <h2 className={isCard ? cardTitle : heading02}>{children}</h2>;

    case 3:
      return <h3 className={isCard ? cardTitle03 : heading03}>{children}</h3>;

    case 4:
      return <h4 className={isCard ? cardTitle04 : heading04}>{children}</h4>;

    case 5:
      return <h5 className={heading05}>{children}</h5>;

    case 6:
      return <h6 className={heading06}>{children}</h6>;

    default:
      throw Error("Unknown level: " + level);
  }
};

export default H;
