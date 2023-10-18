import { ButtonBase } from "./style";

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
  return (
    <ButtonBase
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
