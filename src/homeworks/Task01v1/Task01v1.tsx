import { Item, ItemFlex, ItemText, List, ObserverV1 } from "@components";

const Task01v1 = () => {
  const onContentEndVisible = (): void => {
    alert("End of list is reached");
    console.log("End is in view.");
  };

  return (
    <ObserverV1 onContentEndVisible={onContentEndVisible}>
      <List message="There is no items">
        {[...Array(30)].map((_, i) => (
          <Item key={i}>
            <ItemFlex>
              <ItemText>{`Item ${i + 1}`}</ItemText>
            </ItemFlex>
          </Item>
        ))}
      </List>
    </ObserverV1>
  );
};

export { Task01v1 };
