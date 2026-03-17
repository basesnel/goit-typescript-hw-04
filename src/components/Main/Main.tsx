import type { MainProps } from "@types";
import { mainContext } from "@contexts";

const Main = (props: MainProps) => {
  const { children } = props;

  return (
    <main>
      <mainContext.Provider value={true}>{children}</mainContext.Provider>
    </main>
  );
};

export default Main;
