import { useState } from "react";
import { Item, ItemFlex, ItemText, List, Observer } from "@components";

import styles from "./styles.module.css";

const Task01 = () => {
  const [note, useNote] = useState(false);

  const { notification } = styles;

  return (
    <>
      {note && (
        <div className={notification} onClick={() => useNote(false)}>
          <span>End of list is reached</span>
        </div>
      )}
      <Observer
        onContentEndVisible={() => {
          console.log("End is reached.");
          useNote(true);
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
      </Observer>
    </>
  );
};

export { Task01 };
