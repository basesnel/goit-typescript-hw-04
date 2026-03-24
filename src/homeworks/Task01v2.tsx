import { Item, ItemFlex, ItemText, List, ObserverV2 } from "@components";

const Task01v2 = () => {
  return (
    <ObserverV2>
      <List message="There is no items">
        {[...Array(30)].map((_, i) => (
          <Item key={i}>
            <ItemFlex>
              <ItemText>{`Item ${i + 1}`}</ItemText>
            </ItemFlex>
          </Item>
        ))}
      </List>
    </ObserverV2>
  );
};

export { Task01v2 };
