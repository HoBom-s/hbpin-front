import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

export const FormControlBase = styled.form<StyleComponentProps>`
  width: 100%;
  height: 100%;
  padding: 8px;

  ${(props) => parseCss({ ...props.$sx })}
`;
