import React, { useEffect, useRef } from "react";
import { HideOverFlow } from "@components";

type Props = {
  children: React.ReactNode;
  onContentEndVisible: () => void;
};

type Options = {
  rootMargin: string;
  threshold: number;
  root: HTMLElement | null | undefined;
};

// Опишіть Props
const Observer = ({ children, onContentEndVisible }: Props) => {
  // Вкажіть правильний тип для useRef зверніть увагу, в який DOM елемент ми його передаємо
  const endContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Вкажіть правильний тип для options, підказка, клас також можна вказувати як тип
    const options: Options = {
      rootMargin: "0px",
      threshold: 1.0,
      root: endContentRef.current?.parentElement,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          onContentEndVisible();
          observer.disconnect();
        }
      });
    }, options);

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
