import type { PropsMenu } from "@types";
import { Item, ItemFlex, ItemText, List } from "@components";
import { useContext } from "react";
import { MenuActionContext, MenuSelectedContext } from "./MenuProvider";

const MenuComponent = ({ menus }: PropsMenu) => {
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
};

export { MenuComponent };
