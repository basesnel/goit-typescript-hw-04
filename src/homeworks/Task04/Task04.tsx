import { Item, ItemFlex, ItemText, List } from "@components";
import React, { createContext, useMemo, useState, useContext } from "react";

type MenuIds = "first" | "second" | "last";
type Menu = { id: MenuIds; title: string };

type SelectedMenu = { id?: MenuIds };

type MenuSelected = { selectedMenu: SelectedMenu };

const MenuSelectedContext = createContext<MenuSelected>({
  selectedMenu: {},
});

type MenuAction = {
  onSelectedMenu: (selectedMenu: SelectedMenu) => void;
};

const MenuActionContext = createContext<MenuAction>({
  onSelectedMenu: () => {},
});

type PropsProvider = {
  children: React.ReactNode;
};

function MenuProvider({ children }: PropsProvider) {
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
}

type PropsMenu = {
  menus: Menu[];
};

function MenuComponent({ menus }: PropsMenu) {
  const { onSelectedMenu } = useContext(MenuActionContext);
  const { selectedMenu } = useContext(MenuSelectedContext);

  return (
    <List message="There is no items">
      {menus.map(({ id, title }) => (
        <Item key={id} onClick={() => onSelectedMenu({ id: id })}>
          <ItemFlex spaceBetween>
            <ItemText>{title}</ItemText>
            <ItemText>
              {selectedMenu.id === id ? "Selected" : "Not selected"}
            </ItemText>
          </ItemFlex>
        </Item>
      ))}
    </List>
  );
}

const Task04 = () => {
  const menus: Menu[] = [
    {
      id: "first",
      title: "first",
    },
    {
      id: "second",
      title: "second",
    },
    {
      id: "last",
      title: "last",
    },
  ];

  return (
    <MenuProvider>
      <MenuComponent menus={menus} />
    </MenuProvider>
  );
};

export default Task04;
