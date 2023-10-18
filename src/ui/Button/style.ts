import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

interface ButtonBaseProps extends StyleComponentProps {
  $variant: "outlined" | "fill";
  $fullWidth: boolean;
  $size: "sm" | "md" | "lg";
}

export const ButtonBase = styled.button<ButtonBaseProps>`
  color: ${(props) =>
    props.$variant === "outlined"
      ? props.theme.colors.black700
      : props.theme.colors.white700};

  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};

  background-color: ${(props) =>
    props.$variant === "outlined"
      ? props.theme.colors.white700
      : props.theme.colors.black700};

  border: 1px solid ${(props) => props.theme.colors.black700};

  border-radius: ${(props) => props.theme.border.radius.md};

  font-weight: ${(props) => props.theme.font.weight.fw700};

  padding: ${(props) => {
    const { $size } = props;

    if ($size === "sm") {
      return "11px 15px";
    } else if ($size === "md") {
      return "13px 17px";
    } else if ($size === "lg") {
      return "15px 19px";
    } else {
      return "13px 17px";
    }
  }};

  cursor: pointer;

  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

  ${(props) => parseCss({ ...props.$sx })}
`;
