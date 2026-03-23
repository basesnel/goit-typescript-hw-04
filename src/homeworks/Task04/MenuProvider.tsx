import type { MenuAction, PropsProvider, SelectedMenu } from "@types";
import { createContext, useMemo, useState } from "react";
import { menuSelectedContext } from "@contexts";

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
      <menuSelectedContext.Provider value={menuContextSelected}>
        {children}
      </menuSelectedContext.Provider>
    </MenuActionContext.Provider>
  );
};

export { MenuProvider, MenuActionContext };
