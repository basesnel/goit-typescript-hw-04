import { useRef } from "react";
import type { ObserverV1Props } from "@types";
import { HideOverFlow } from "@components";
import { useObservation } from "./useObservation";

const ObserverV1 = ({ children, onContentEndVisible }: ObserverV1Props) => {
  const endContentRef = useRef<HTMLDivElement>(null);

  useObservation(endContentRef, onContentEndVisible);

  return (
    <HideOverFlow>
      <div>{children}</div>
      <div ref={endContentRef} />
    </HideOverFlow>
  );
};

export default ObserverV1;
