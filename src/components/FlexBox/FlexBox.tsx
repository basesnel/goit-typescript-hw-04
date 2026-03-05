import styles from "./styles.module.css";

type FlexBoxProps = {
  direction?: "row-reverse" | "column" | "column-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "baseline";
  wrapped?: "wrap" | "nowrap" | "wrap-reverse";
  children: React.ReactNode[];
};

const FlexBox = (props: FlexBoxProps) => {
  const { direction, align, wrapped, children } = props;
  const { flexed } = styles;

  const directionItems = direction ? `${styles[direction]}` : "";
  const alignItems = align ? `${styles[align]}` : "";
  const wrapItems = wrapped ? `${styles[wrapped]}` : flexed;

  return (
    <div className={`${directionItems} ${alignItems} ${wrapItems}`}>
      {children}
    </div>
  );
};

export default FlexBox;
