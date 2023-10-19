import { BoxBase } from "./style";

// util
import { isNotNull } from "@/utils";

// type
import type { ComponentProps, ChildrenAlias } from "@/types/Common";

interface BoxProps extends ComponentProps {
  children: ChildrenAlias;
  onClick?: <T>(param?: T) => void;
}

export const Box = ({ children, className, sx, onClick }: BoxProps) => {
  return (
    <BoxBase
      className={className}
      $sx={{
        ...sx,
        width: isNotNull(sx?.width) ? sx?.width : "100%",
        height: isNotNull(sx?.height) ? sx?.height : "100%",
      }}
      onClick={onClick}
    >
      {children}
    </BoxBase>
  );
};
