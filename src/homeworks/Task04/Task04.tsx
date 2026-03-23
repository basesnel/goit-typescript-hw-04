import type { Menu } from "@types";
import { MenuComponent } from "./MenuComponent";
import { MenuProvider } from "./MenuProvider";

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
