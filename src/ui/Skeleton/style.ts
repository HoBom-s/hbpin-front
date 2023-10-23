import styled, { keyframes } from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import { StyleComponentProps } from "@/types/Style";

interface SkeletonBaseProps extends StyleComponentProps {
  $rounded: boolean;
}

const skeletonGradient = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }

  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }

  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

export const SkeletonBase = styled.div<SkeletonBaseProps>`
  display: inline-block;
  background-color: F2F2F2;
  width: 100%;
  position: relative;
  z-index: 1;
  border-radius: ${(props) => (props.$rounded ? "8px" : "none")};
  animation: ${skeletonGradient} 1.5s infinite ease-in-out;

  ${(props) => parseCss({ ...props.$sx })};
`;
