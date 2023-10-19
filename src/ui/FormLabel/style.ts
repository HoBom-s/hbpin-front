import styled from "styled-components";

import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

export const FormLabelBase = styled.span<StyleComponentProps>`
  display: block;
  font-weight: bold;

  ${(props) => parseCss({ ...props.$sx })}
`;
