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

/**
 * 비밀번호 정규식 8 ~ 15자리 영문 특수문자 숫자 조합
 *
 * @param {string} target
 * @returns {boolean}
 */
export const isPassword = (target: string): boolean => {
  const reg: RegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  if (reg.test(target)) {
    return true;
  }

  return false;
};

/**
 * Email 정규식
 *
 * @param {string} target
 * @returns {boolean}
 */
export const isEmail = (target: string): boolean => {
  const reg: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (reg.test(target)) {
    return true;
  }

  return false;
};
