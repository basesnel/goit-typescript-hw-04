import { useRef } from "react";
import type { ObserverV2Props } from "@types";
import { HideOverFlow } from "@components";
import { useObservation } from "./useObservation";

import styles from "./styles.module.css";

const ObserverV2 = (props: ObserverV2Props) => {
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
