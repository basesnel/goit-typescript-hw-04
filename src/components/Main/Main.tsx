import { mainContext } from "@contexts/index";

type MainProps = {
  children: React.ReactNode;
};

const Main = (props: MainProps) => {
  const { children } = props;

  return (
    <main>
      <mainContext.Provider value={true}>{children}</mainContext.Provider>
    </main>
  );
};

export default Main;
