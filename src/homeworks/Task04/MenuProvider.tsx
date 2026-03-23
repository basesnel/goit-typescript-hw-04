import type {
  MenuAction,
  MenuSelected,
  PropsProvider,
  SelectedMenu,
} from "@types";
import { createContext, useMemo, useState } from "react";

const MenuSelectedContext = createContext<MenuSelected>({
  selectedMenu: {},
});

const MenuActionContext = createContext<MenuAction>({
  onSelectedMenu: () => {},
});

const MenuProvider = ({ children }: PropsProvider) => {
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenu>({});

  const menuContextAction = useMemo(
    () => ({
      onSelectedMenu: setSelectedMenu,
    }),
    [],
  );

  const menuContextSelected = useMemo(
    () => ({
      selectedMenu,
    }),
    [selectedMenu],
  );

  return (
    <MenuActionContext.Provider value={menuContextAction}>
      <MenuSelectedContext.Provider value={menuContextSelected}>
        {children}
      </MenuSelectedContext.Provider>
    </MenuActionContext.Provider>
  );
};

export { MenuProvider, MenuActionContext, MenuSelectedContext };
