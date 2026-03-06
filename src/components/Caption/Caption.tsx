import styles from "./styles.module.css";

type CaptionProps = {
  children: React.ReactNode;
};

const Caption = (props: CaptionProps) => {
  const { children } = props;
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <span>{children}</span>
    </div>
  );
};

export default Caption;
