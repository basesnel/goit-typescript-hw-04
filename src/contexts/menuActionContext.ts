import type { MenuAction } from "@tstypes";
import { createContext } from "react";

const menuActionContext = createContext<MenuAction>({
  onSelectedMenu: () => {},
});

export { menuActionContext };
