import React, { useRef } from "react";
import { HideOverFlow } from "@components";
import { useObservation } from "./useObservation";

import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

const ObserverV2 = (props: Props) => {
  const { children } = props;
  const { wrapped, notification } = styles;
  const endContentRef = useRef<HTMLDivElement>(null);
  const notify = useObservation(endContentRef);

  return (
    <div className={wrapped}>
      {notify && (
        <div className={notification}>
          <span>There is an end of list.</span>
        </div>
      )}
      <HideOverFlow>
        <div>{children}</div>
        <div ref={endContentRef} />
      </HideOverFlow>
    </div>
  );
};

export default ObserverV2;
