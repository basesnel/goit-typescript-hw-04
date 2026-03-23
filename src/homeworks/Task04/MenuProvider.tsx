import type { PropsProvider, SelectedMenu } from "@types";
import { useMemo, useState } from "react";
import { menuActionContext, menuSelectedContext } from "@contexts";

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
    <menuActionContext.Provider value={menuContextAction}>
      <menuSelectedContext.Provider value={menuContextSelected}>
        {children}
      </menuSelectedContext.Provider>
    </menuActionContext.Provider>
  );
};

export { MenuProvider };
