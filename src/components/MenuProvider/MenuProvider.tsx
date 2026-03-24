import type { ChildrenProps, SelectedMenu } from "@tstypes";
import { useMemo, useState } from "react";
import { menuActionContext, menuSelectedContext } from "@contexts";

const MenuProvider = ({ children }: ChildrenProps) => {
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
    <menuActionContext.Provider value={menuContextAction}>
      <menuSelectedContext.Provider value={menuContextSelected}>
        {children}
      </menuSelectedContext.Provider>
    </menuActionContext.Provider>
  );
};

export default MenuProvider;
