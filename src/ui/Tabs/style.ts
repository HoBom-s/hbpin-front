import styled from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

interface TabsBaseProps extends StyleComponentProps {
  $fullWidth: boolean;
}

export const TabsBase = styled.div<TabsBaseProps>`
  display: ${(props) => (props.$fullWidth ? "block" : "inline-block")};

  ${(props) => parseCss({ ...props.$sx })}
`;

export const TabsScroller = styled.div`
  position: relative;
  display: inline-block;
  flex: 1 1 auto;
  white-space: nowrap;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
`;
