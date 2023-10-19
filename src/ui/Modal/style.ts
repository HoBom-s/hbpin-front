import styled, { keyframes } from "styled-components";

// util
import { parseCss } from "@/utils";

// type
import type { StyleComponentProps } from "@/types/Style";

interface ModalBackdropBaseProps {
  $isOpen: boolean;
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const ModalBackdropBase = styled.div<ModalBackdropBaseProps>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$isOpen ? "flex" : "none")};

  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

export const ModalBase = styled.div<StyleComponentProps>`
  width: auto;
  height: auto;
  display: flex;
  min-width: 390px;
  max-height: 680px;
  padding: 0.875rem;
  border-radius: 6px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white700};
  z-index: 30;

  ${(props) => parseCss({ ...props.$sx })}
`;
