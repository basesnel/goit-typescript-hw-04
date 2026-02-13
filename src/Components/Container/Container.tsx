import styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const { children } = props;
  const { container } = styles;

  return (
    <div role="presentation" className={container}>
      {children}
    </div>
  );
};

export default Container;
