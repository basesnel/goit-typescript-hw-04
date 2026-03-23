import type { MenuAction } from "@types";
import { createContext } from "react";

const menuActionContext = createContext<MenuAction>({
  onSelectedMenu: () => {},
});

export { menuActionContext };
