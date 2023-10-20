import { useEffect, RefObject } from "react";

interface OutsideClick {
  ref: RefObject<HTMLElement>;
  handler: () => void;
}

/**
 * Outside click hook
 *
 * @example
 *      useOutsideClick({
 *          ref: ref,
 *          handler: () => console.log("Hi"),
 *      });
 *
 * @param {OutsideClick} param
 */
export const useOutsideClick = ({ ref, handler }: OutsideClick) => {
  useEffect(() => {
    let observerRef: HTMLElement | null = null;

    document.addEventListener("click", (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        observerRef = ref.current;
        handler();
      }
    });

    return () => {
      document.removeEventListener("click", (e: MouseEvent) => {
        if (observerRef && !observerRef.contains(e.target as Node)) {
          handler();
        }
      });
    };
  }, [ref, handler]);
};
