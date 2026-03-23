import type { MenuSelected } from "@types";
import { createContext } from "react";

const menuSelectedContext = createContext<MenuSelected>({
  selectedMenu: {},
});

export { menuSelectedContext };
