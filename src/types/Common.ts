import { ReactNode } from "react";

// types
import type { Style } from "./private/Style";

/**
 * Common Util Type 정의
 *
 * Possible null or undefined
 * Null이나 Undefined이거나, 혹은 정의가 돼있을 수도 있는 Type
 *
 * @Author HoBom
 */
export type Nullable<T> = null | undefined | T;

/**
 * ReactNode type alias
 * 기본적으로 ReactNode를 가리키는 Type alias
 */
export type ChildrenAlias = ReactNode;

/**
 * ReactNode interface
 * 기본적으로 ReactNode를 가리키는 Interface Type
 */
export interface Children {
  /**
   * ReactNode
   */
  children: ReactNode;
}

export interface ComponentProps {
  /**
   * View 역할을 하는 Component에서 사용될 Style Props 정의
   * 주로 CSS에서 사용하는 속성들을 밀어 넣는다.
   */
  sx?: Partial<Style>;
}
