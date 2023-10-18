// type
import type { Style, StyleObject } from "@/types/Style";

interface Space {
  [key: string]: string;
}

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
 * Padding, Margin과 같은 공간을 조작하는 Object를 parsing하여 변환
 *
 * @param {string} str
 * @returns {string}
 */
const parseSpace = (str: string): string => {
  const spaceObject: Space = {
    p: "padding",
    pt: "paddingTop",
    pr: "paddingRight",
    pb: "paddingBottom",
    pl: "paddingLeft",
    m: "margin",
    mr: "marginRight",
    mb: "marginBottom",
    ml: "marginLeft",
  };

  if (spaceObject[str]) {
    return spaceObject[str];
  }

  return str;
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
        return `${camelToKebab(parseSpace(styleString))}: ${obj[styleString]};`;
      }

      return "";
    })
    .join("\n");

  return parsedString;
};
