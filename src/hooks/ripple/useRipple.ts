import { useEffect, RefObject } from "react";

const ANIMATION_LENGTH = 700;
const RIPPLE_SIZE = 100;
const RIPPLE_COLOR = "rgba(0, 0, 0, 0.3)";

if (typeof document !== "undefined") {
  const style = document.createElement("style");

  const keyframes = `
    @keyframes ripple-animation {
      from {
        opacity: 1;
        transform: scale(0);
      }
      to {
        opacity: 0;
        transform: scale(10);
      }
    }
    `;

  style.innerHTML = keyframes;

  document.querySelector("head")?.appendChild(style);
}

interface RippleEvent {
  clientX?: number;
  clientY?: number;
  target: EventTarget | null;
}

const defaultEvent: Required<RippleEvent> = {
  clientX: 0,
  clientY: 0,
  target: null,
};

const generateRipple = (element: HTMLElement) => (e?: RippleEvent) => {
  const clientX = e?.clientX || defaultEvent.clientX;
  const clientY = e?.clientY || defaultEvent.clientY;

  const { height, width, top, left } = element.getBoundingClientRect();

  const x = clientX - left;
  const y = clientY - top;

  const rippleSize = Math.min(height, width, RIPPLE_SIZE);

  const positionTop = clientX
    ? y - rippleSize / 2
    : rippleSize / 2 - height / 2;
  const positionLeft = clientY
    ? x - rippleSize / 2
    : width / 2 - rippleSize / 2;

  const span = document.createElement("span");

  span.style.cssText = `
    top: ${positionTop}px;
    left: ${positionLeft}px;
    position: absolute;
    border-radius: 50%;
    background-color: ${RIPPLE_COLOR};
    pointer-events: none;
    width: ${rippleSize}px;
    height: ${rippleSize}px;
    animation: ripple-animation ${ANIMATION_LENGTH}ms ease-in;
  `;

  element.appendChild(span);

  span.addEventListener("animationend", () => {
    element.removeChild(span);
  });
};

/**
 * Ripple animation hook
 *
 * @example
 *    const ref = useRef();
 *    useRipple(ref);
 *
 * @param {HTMLElement} ref
 */
export const useRipple = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    const elem = ref.current;
    const elemtPosition = getComputedStyle(elem).getPropertyValue("position");

    elem.style.position =
      elemtPosition === "static" || !elemtPosition ? "relative" : elemtPosition;
    elem.style.overflow = "hidden";

    const ripple = generateRipple(elem);

    elem.addEventListener("mousedown", ripple);

    return () => {
      elem.removeEventListener("mousedown", ripple);
    };
  }, [ref]);
};
