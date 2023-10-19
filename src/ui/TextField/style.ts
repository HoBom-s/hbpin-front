import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

export const TextFieldBase = styled.label`
  width: 100%;
  position: relative;
`;

export const InputBase = styled.input<StyleComponentProps>`
  width: 100%;
  height: 48px;
  border: 1px solid #c0c0c0;
  border-radius: ${(props) => props.theme.border.radius.sm}px;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px #00000014;
  padding: 8px;

  &:focus {
    outline: none;
    border: 1px solid #3F51B5;
  }

  ${(props) => parseCss({ ...props.$sx })}
}
`;
