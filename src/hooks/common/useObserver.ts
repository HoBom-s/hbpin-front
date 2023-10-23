interface ObserverReturn {
  observer: IntersectionObserver;
}

type ObserverCallback = (entries: IntersectionObserverEntry[]) => void;

/**
 * Observer hook
 * 
 * @example
 * useObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setSrc(src);
          };
        }
      });
    },
    {
      rootMargin: `0px 0px ${bottomViewMargin} 0px`,
      threshold: 0.5,
    }
  );
 *
 * @param {ObserverCallback} callback
 * @param {IntersectionObserverInit} options
 * @returns {ObserverReturn}
 */
export const useObserver = (
  callback: ObserverCallback,
  options: IntersectionObserverInit,
): ObserverReturn => {
  const observer: IntersectionObserver = new IntersectionObserver(
    callback,
    options,
  );

  return {
    observer,
  };
};
