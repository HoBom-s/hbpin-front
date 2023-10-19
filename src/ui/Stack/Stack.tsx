import { Children } from "react";
import { StackBase } from "./style";

// type
import type { ComponentProps } from "@/types/Common";
import type { ChildrenAlias } from "@/types/Common";

interface StackProps extends ComponentProps {
  children: ChildrenAlias;
  direction?: "row" | "col";
  align?: "left" | "center" | "end";
  spaicng: number;
}

export const Stack = ({
  children,
  className,
  direction = "col",
  align = "left",
  spaicng,
  sx,
}: StackProps) => {
  const childs = Children.map(children, (child) => child)?.slice(0, spaicng);

  return (
    <StackBase
      className={className}
      $direction={direction}
      $align={align}
      $sx={sx}
    >
      {Array.from({ length: spaicng }).map((_, idx: number) => (
        <div key={idx} style={{ width: "auto" }}>
          {childs && childs[idx]}
        </div>
      ))}
    </StackBase>
  );
};
