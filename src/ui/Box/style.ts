import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

export const BoxBase = styled.div<StyleComponentProps>`
  ${(props) => parseCss({ ...props.$sx })}
`;
