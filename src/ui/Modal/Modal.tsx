import { createPortal } from "react-dom";
import { ModalBackdropBase, ModalBase } from "./style";

// type
import type { ComponentProps } from "@/types/Common";
import type { ChildrenAlias } from "@/types/Common";

interface ModalProps extends ComponentProps {
  isOpen: boolean;
  children: ChildrenAlias;
}

const hbModalRoot = document.getElementById("hb-modal-root");

export const Modal = ({ children, className, isOpen, sx }: ModalProps) => {
  if (hbModalRoot) {
    return createPortal(
      <ModalBackdropBase $isOpen={isOpen}>
        <ModalBase className={className} $sx={sx}>
          {children}
        </ModalBase>
      </ModalBackdropBase>,
      hbModalRoot,
    );
  }

  return (
    <ModalBackdropBase $isOpen={isOpen}>
      <ModalBase className={className} $sx={sx}>
        {children}
      </ModalBase>
    </ModalBackdropBase>
  );
};
