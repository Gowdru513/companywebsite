import { useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  target: RefObject<Element>;
  onIntersect?: () => void;
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver({
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onIntersect) {
          onIntersect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const element = target.current;

    if (!element) {
      return;
    }

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [target, onIntersect, threshold, rootMargin]);
}