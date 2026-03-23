type MenuIds = "first" | "second" | "last";
type Menu = { id: MenuIds; title: string };

type SelectedMenu = { id?: MenuIds };

type MenuSelected = { selectedMenu: SelectedMenu };

type MenuAction = { onSelectedMenu: (selectedMenu: SelectedMenu) => void };

type PropsMenu = { menus: Menu[] };

export type { Menu, MenuAction, MenuSelected, PropsMenu, SelectedMenu };
