import React, { useEffect, useRef } from "react";
import { HideOverFlow } from "@components";

type Props = {
  children: React.ReactNode;
  onContentEndVisible: () => void;
  onNoContentEndVisible: () => void;
};

type Options = {
  rootMargin: string;
  threshold: number;
  root: HTMLElement | null | undefined;
};

// Опишіть Props
const Observer = ({
  children,
  onContentEndVisible,
  onNoContentEndVisible,
}: Props) => {
  // Вкажіть правильний тип для useRef зверніть увагу, в який DOM елемент ми його передаємо
  const endContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Вкажіть правильний тип для options, підказка, клас також можна вказувати як тип
    const options: Options = {
      rootMargin: "0px 0px 1px 0px",
      threshold: 0,
      root: endContentRef.current?.parentElement,
    };

    const observerCollback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > 0) {
            onContentEndVisible();
            console.log("End is in view.");
          }
        } else {
          onNoContentEndVisible();
          console.log("End isn't in view.");
        }
      });
    };

    const observer = new IntersectionObserver(observerCollback, options);

    if (endContentRef.current) {
      observer.observe(endContentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [onContentEndVisible]);

  return (
    <HideOverFlow>
      <div>{children}</div>
      <div ref={endContentRef} />
    </HideOverFlow>
  );
};

export default Observer;
