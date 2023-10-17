// type
import { Style } from "@/types/private/Style";

type StyleObject = {
  [key in keyof Style | string]: string | number;
};

/**
 * CamelCase 식 문자열을 KebabCase로 변환
 *
 * @param {string} str
 * @returns {string}
 */
const camelToKebab = (str: string): string => {
  const kebabString: string = str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();

  return kebabString;
};

/**
 * CSS에 적용하기 위해 Style object를 CSS 문자열로 변환
 *
 * @param {Style} styleObject
 * @returns {string}
 */
export const parseCss = (styleObject: Style): string => {
  const parsedString: string = Object.keys(styleObject)
    .map((styleString: string) => {
      const obj: StyleObject = styleObject as StyleObject;

      if (obj[styleString]) {
        return `${camelToKebab(styleString)}: ${obj[styleString]};`;
      }

      return "";
    })
    .join("\n");

  return parsedString;
};
