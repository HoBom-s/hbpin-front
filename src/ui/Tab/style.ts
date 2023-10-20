import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

export const TabBase = styled.div<StyleComponentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  ${(props) => parseCss({ ...props.$sx })}
`;

export const TabIndicatorBase = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.orange400};
`;
