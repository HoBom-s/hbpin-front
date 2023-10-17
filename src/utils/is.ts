/**
 * Null이 아니다.
 *
 * @param {unknown} target
 * @returns {boolean}
 */
export const isNotNull = (target: unknown): boolean => {
  if (target === undefined || target === null) {
    return false;
  }

  return true;
};

/**
 * Object 이다.
 *
 * @param {unknown} target
 * @returns {boolean}
 */
export const isObject = (target: unknown): boolean => {
  if (Object.prototype.toString.call(target) === "[object Object") {
    return true;
  }

  return false;
};

/**
 * 비어있는 Object인지 확인.
 *
 * @param {unknown} target
 * @returns {boolean}
 */
export const isEmptyObject = (target: unknown): boolean => {
  if (isObject(target)) {
    if (Object.keys(target as object).length > 0) {
      return false;
    }
  }

  return true;
};
