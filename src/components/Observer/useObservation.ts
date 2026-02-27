import { useEffect, useState, type RefObject } from "react";

type Options = {
  rootMargin: string;
  threshold: number;
  root: HTMLElement | null | undefined;
};

const useObservation = (target: RefObject<HTMLDivElement | null>): boolean => {
  const [notify, useNotify] = useState<boolean>(false);

  useEffect(() => {
    const options: Options = {
      rootMargin: "0px 0px 1px 0px",
      threshold: 0,
      root: target.current?.parentElement,
    };

    const onContentEndVisible = () => {
      useNotify(true);
      console.log("End is in view.");
    };

    const onNoContentEndVisible = () => {
      useNotify(false);
      console.log("End isn't in view.");
    };

    const observerCollback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > 0) {
            onContentEndVisible();
          }
        } else {
          onNoContentEndVisible();
        }
      });
    };

    const observer = new IntersectionObserver(observerCollback, options);

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return notify;
};

export { useObservation };
