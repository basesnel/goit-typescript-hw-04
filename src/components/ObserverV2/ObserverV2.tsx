import { useRef } from "react";
import type { ChildrenProps } from "@tstypes";
import { HideOverFlow } from "@components";
import { useObservationV2 } from "@hooks";

import styles from "./styles.module.css";

const ObserverV2 = (props: ChildrenProps) => {
  const { children } = props;
  const { wrapped, notification } = styles;
  const endContentRef = useRef<HTMLDivElement>(null);
  const notify = useObservationV2(endContentRef);

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
