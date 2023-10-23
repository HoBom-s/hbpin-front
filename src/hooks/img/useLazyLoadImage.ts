import { MutableRefObject, useState, useEffect, useRef } from "react";

// hooks
import { useObserver } from "@/hooks";

interface LazyLoadImage {
  imgSrc: string;

  imgRef: MutableRefObject<HTMLImageElement | null>;
}

/**
 * @param {string} src
 * @param {string} placeholder
 * @param {string} bottomViewMargin
 * @param {boolean} isLazy
 * @returns {LazyLoadImage}
 */
export const useLazyLoadImage = (
  src: string,
  placeholder: string,
  bottomViewMargin = "500px",
  isLazy: boolean,
): LazyLoadImage => {
  const [imgSrc, setImgSrc] = useState<string>(isLazy ? placeholder : src);

  const imgRef = useRef<HTMLImageElement | null>(null);

  const { observer } = useObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const img = new Image();

          img.src = src;

          img.onload = () => {
            setImgSrc(src);
          };
        }
      });
    },
    {
      rootMargin: `0px 0px ${bottomViewMargin} 0px`,
      threshold: 0.5,
    },
  );

  useEffect(() => {
    const imageRef = imgRef.current;

    if (!isLazy) {
      setImgSrc(src);
      return;
    }

    if (imgRef && observer) {
      if (imageRef) {
        observer.observe(imageRef);
      }
    }

    return () => {
      if (imageRef && observer) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, bottomViewMargin, isLazy, observer]);

  return { imgSrc, imgRef };
};
