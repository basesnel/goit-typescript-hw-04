import styles from "./styles.module.css";

type CaptionProps = {
  children: React.ReactNode;
};

const Caption = (props: CaptionProps) => {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <span>{children}</span>
    </div>
  );
};

export default Caption;
