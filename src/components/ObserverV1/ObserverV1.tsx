import { useRef } from "react";
import type { ObserverV1Props } from "@tstypes";
import { HideOverFlow } from "@components";
import { useObservationV1 } from "@hooks";

const ObserverV1 = ({ children, onContentEndVisible }: ObserverV1Props) => {
  const endContentRef = useRef<HTMLDivElement>(null);

  useObservationV1(endContentRef, onContentEndVisible);

  return (
    <HideOverFlow>
      <div>{children}</div>
      <div ref={endContentRef} />
    </HideOverFlow>
  );
};

export default ObserverV1;
