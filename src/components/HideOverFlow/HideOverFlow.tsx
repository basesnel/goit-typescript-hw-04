import styles from "./styles.module.css";

type HideOverFlowProps = {
  children: React.ReactNode;
};

const HideOverflow = (props: HideOverFlowProps) => {
  const { children } = props;
  const { hideOverflow } = styles;

  return <div className={hideOverflow}>{children}</div>;
};

export default HideOverflow;
