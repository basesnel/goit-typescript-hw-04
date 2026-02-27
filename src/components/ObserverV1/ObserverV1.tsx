import React, { useRef } from "react";
import { HideOverFlow } from "@components";
import { useObservation } from "./useObservation";

type Props = {
  children: React.ReactNode;
  onContentEndVisible: () => void;
};

const ObserverV1 = ({ children, onContentEndVisible }: Props) => {
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
