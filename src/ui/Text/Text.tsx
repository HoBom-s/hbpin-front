import { TextBase } from "./style";

// type
import type { ChildrenAlias, ComponentProps } from "@/types/Common";

interface TextProps extends ComponentProps {
  children: ChildrenAlias;
  variant?: "subtitle" | "normal";
}

export const Text = ({
  children,
  className,
  sx,
  variant = "normal",
}: TextProps) => {
  return (
    <TextBase className={className} $sx={sx} $variant={variant}>
      {children}
    </TextBase>
  );
};
