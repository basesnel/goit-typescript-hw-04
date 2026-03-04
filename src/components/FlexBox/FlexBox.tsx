import styles from "./styles.module.css";

type FlexBoxProps = {
  direction?: "row-reverse" | "column" | "column-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "baseline";
  wrapped?: "wrap" | "nowrap" | "wrap-reverse";
  children: React.ReactNode[];
};

const FlexBox = (props: FlexBoxProps) => {
  const { direction, align, wrapped, children } = props;

  const alignItems = align ? `${styles[align]}` : "";
  const directionItems = direction ? `${styles[direction]}` : "";
  const wrapItems = wrapped ? `${styles[wrapped]}` : "";

  return (
    <div
      className={`${styles.flexed} ${directionItems} ${alignItems} ${wrapItems}`}
    >
      {children}
    </div>
  );
};

export default FlexBox;
