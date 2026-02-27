import { useState } from "react";
import { Item, ItemFlex, ItemText, List, ObserverV1 } from "@components";

import styles from "./styles.module.css";

const Task01v1 = () => {
  const [notify, useNotify] = useState<boolean>(false);

  const { notification } = styles;

  return (
    <>
      {notify && (
        <div className={notification} onClick={() => useNotify(false)}>
          <span>End of list is reached</span>
        </div>
      )}
      <ObserverV1
        onContentEndVisible={() => {
          useNotify(true);
          console.log("End is in view.");
        }}
      >
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
    </>
  );
};

export { Task01v1 };
