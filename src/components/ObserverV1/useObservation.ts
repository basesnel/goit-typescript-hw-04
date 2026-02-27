import { useEffect, type RefObject } from "react";

type Options = {
  rootMargin: string;
  threshold: number;
  root: HTMLElement | null | undefined;
};

const useObservation = (
  target: RefObject<HTMLDivElement | null>,
  onContentEndVisible: () => void,
) => {
  useEffect(() => {
    const options: Options = {
      rootMargin: "0px 0px 1px 0px",
      threshold: 1.0,
      root: target.current?.parentElement,
    };

    const observerCollback = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > 0) {
            onContentEndVisible();
          }
          observer.unobserve(entry.target);
          observer.disconnect();
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
  }, [onContentEndVisible]);
};

export { useObservation };
