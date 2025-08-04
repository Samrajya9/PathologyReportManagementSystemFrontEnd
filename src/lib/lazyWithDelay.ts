import { lazy } from "react";

export function lazyWithDelay<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  delay: number
) {
  return lazy(
    () =>
      new Promise<{ default: T }>((resolve) =>
        setTimeout(() => {
          importFn().then(resolve);
        }, delay)
      )
  );
}
