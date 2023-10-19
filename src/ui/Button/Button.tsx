import { useRef } from "react";
import { ButtonBase } from "./style";

// hook
import { useRipple } from "@/hooks";

// type
import type { ComponentProps } from "@/types/Common";

interface ButtonProps extends ComponentProps {
  variant?: "outlined" | "fill";

  fullWidth?: boolean;

  label: string;

  size?: "sm" | "md" | "lg";

  onClick?: <T>(param?: T) => void;
}

export const Button = ({
  variant = "outlined",
  fullWidth = false,
  label,
  size = "md",
  sx,
  onClick,
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  useRipple(ref);

  return (
    <ButtonBase
      ref={ref}
      $sx={{ ...sx }}
      $variant={variant}
      $fullWidth={fullWidth}
      $size={size}
      onClick={onClick}
    >
      <span>{label}</span>
    </ButtonBase>
  );
};
