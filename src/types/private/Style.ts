/**
 * CSS에서 주로 사용하는 Style 정의
 *
 * layout, spacing, display, color etc...
 */
export interface Style {
  color?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  boxShadow?: string;
  fontWeight?: string;
  fontSize?: string;
  display?: "flex" | "grid" | "block" | "inline-block" | "inline";
  alignItems?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end";
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right";
  placeItems?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  zIndex?: number;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  p?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  m?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
}
