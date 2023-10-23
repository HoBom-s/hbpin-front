import { useRef } from "react";
import { ButtonBase } from "./style";

// hook
import { useRipple } from "@/hooks";

// type
import type { ComponentProps } from "@/types/Common";

interface ButtonProps extends ComponentProps {
  type?: "button" | "submit";

  variant?: "outlined" | "fill" | "text";

  fullWidth?: boolean;

  label: string;

  size?: "sm" | "md" | "lg";

  flat?: boolean;

  disabled?: boolean;

  onClick?: <T>(param?: T) => void;
}

export const Button = ({
  className,
  type = "button",
  variant = "outlined",
  fullWidth = false,
  label,
  size = "md",
  flat = false,
  disabled = false,
  sx,
  onClick,
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  useRipple(ref);

  return (
    <ButtonBase
      className={className}
      ref={ref}
      type={type}
      $sx={{ ...sx }}
      $variant={variant}
      $fullWidth={fullWidth}
      $size={size}
      $flat={flat}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{label.toUpperCase()}</span>
    </ButtonBase>
  );
};
