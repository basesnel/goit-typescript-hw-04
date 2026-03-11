import styles from "./styles.module.css";

type CaptionProps = {
  label: string;
  note: string;
};

const Caption = (props: CaptionProps) => {
  const { label, note } = props;
  const { notify, labelStyle, noteStyle } = styles;

  return (
    <div className={notify}>
      <span className={labelStyle}>{label}:</span>
      <span lang="en" className={noteStyle}>
        {note}
      </span>
    </div>
  );
};

export default Caption;
