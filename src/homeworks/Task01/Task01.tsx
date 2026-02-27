import { Item, ItemFlex, ItemText, List, Observer } from "@components";

const Task01 = () => {
  return (
    <Observer>
      <List message="There is no items">
        {[...Array(30)].map((_, i) => (
          <Item key={i}>
            <ItemFlex>
              <ItemText>{`Item ${i + 1}`}</ItemText>
            </ItemFlex>
          </Item>
        ))}
      </List>
    </Observer>
  );
};

export { Task01 };
