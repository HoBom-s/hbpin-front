import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

interface ButtonBaseProps extends StyleComponentProps {
  $variant: "outlined" | "fill" | "text";
  $fullWidth: boolean;
  $size: "sm" | "md" | "lg";
  $flat: boolean;
}

export const ButtonBase = styled.button<ButtonBaseProps>`
  color: ${(props) => {
    switch (props.$variant) {
      case "outlined": {
        return props.theme.colors.black700;
      }

      case "fill": {
        return props.theme.colors.white700;
      }

      case "text": {
        return props.theme.colors.black700;
      }

      default: {
        return props.theme.colors.black700;
      }
    }
  }};

  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};

  background-color: ${(props) => {
    switch (props.$variant) {
      case "outlined": {
        return props.theme.colors.white700;
      }

      case "fill": {
        return props.theme.colors.black700;
      }

      case "text": {
        return "transparent";
      }

      default: {
        return props.theme.colors.white700;
      }
    }
  }};

  border: ${(props) =>
    props.$variant === "text"
      ? "none"
      : `1px solid ${props.theme.colors.black700}`};

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

  box-shadow: ${(props) =>
    props.$flat
      ? "none"
      : `rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
  rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
  rgba(0, 0, 0, 0.12) 0px 1px 5px 0px`};

  ${(props) => parseCss({ ...props.$sx })}
`;
