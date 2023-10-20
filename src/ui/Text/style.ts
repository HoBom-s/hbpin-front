import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

interface TextBaseProps extends StyleComponentProps {
  $variant: "subtitle" | "normal";
}

export const TextBase = styled.p<TextBaseProps>`
  font-color: ${(props) =>
    props.$variant === "subtitle"
      ? props.theme.colors.black500
      : props.theme.colors.black900};

  font-size: ${(props) =>
    props.$variant === "subtitle"
      ? props.theme.font.size.sm
      : props.theme.font.size.md};

  ${(props) => parseCss({ ...props.$sx })};
`;
