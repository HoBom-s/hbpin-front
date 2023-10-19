import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

export const DividerBase = styled.div<StyleComponentProps>`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.gray200};

  ${(props) => parseCss({ ...props.$sx })};
`;
