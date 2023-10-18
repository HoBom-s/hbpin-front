import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

interface StackBaseProps extends StyleComponentProps {
  $direction: "row" | "col";
  $align: "left" | "center" | "end";
}

export const StackBase = styled.div<StackBaseProps>`
  ${(props) => parseCss({ ...props.$sx })}

  display: flex;

  flex-wrap: wrap;

  flex-direction: ${(props) => {
    switch (props.$direction) {
      case "row": {
        return "row";
      }

      case "col": {
        return "column";
      }

      default: {
        return "column";
      }
    }
  }};

  align-items: ${(props) => props.$align};
`;
