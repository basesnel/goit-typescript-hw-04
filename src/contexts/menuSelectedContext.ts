import type { MenuSelected } from "@tstypes";
import { createContext } from "react";

const menuSelectedContext = createContext<MenuSelected>({
  selectedMenu: {},
});

export { menuSelectedContext };
