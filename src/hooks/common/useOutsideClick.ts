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
    document.addEventListener("click", (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    });

    return () => {
      document.removeEventListener("click", (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler();
        }
      });
    };
  }, [ref.current, handler]);
};
