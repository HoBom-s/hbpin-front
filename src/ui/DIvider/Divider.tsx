import { DividerBase } from "./style";

// type
import { ComponentProps } from "@/types/Common";

export const Divider = ({ className, sx }: ComponentProps) => {
  return <DividerBase className={className} $sx={sx} />;
};
