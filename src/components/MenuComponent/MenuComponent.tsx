import type { PropsMenu } from "@tstypes";
import { Item, ItemFlex, ItemText, List } from "@components";
import { useContext } from "react";
import { menuActionContext, menuSelectedContext } from "@contexts";

const MenuComponent = ({ menus }: PropsMenu) => {
  const { onSelectedMenu } = useContext(menuActionContext);
  const { selectedMenu } = useContext(menuSelectedContext);

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

export default MenuComponent;
