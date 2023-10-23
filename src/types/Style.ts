/**
 * CSS에서 주로 사용하는 Style 정의
 *
 * layout, spacing, display, color etc...
 */
export interface Style {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  backgroundSize?: string;
  backgroundImage?: string;
  boxShadow?: string;
  fontWeight?: string;
  fontSize?: string;
  textAlign?: "start" | "end" | "center" | "justify";
  display?: "flex" | "grid" | "block" | "inline-block" | "inline";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
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
    | "right"
    | "space-between";
  placeItems?: string;
  gap?: string;
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
  cursor?: "pointer" | "default" | "move" | "auto" | "wait" | "help";
}

/**
 * Indexing이 가능한 StyleObject type
 * CSS를 parsing하기 위해서는 Indexing이 필요하다.
 */
export type StyleObject = {
  [key in keyof Style | string]: string | number;
};

export interface StyleComponentProps {
  $sx?: Style;
}
