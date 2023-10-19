import { FormEvent } from "react";
import { FormControlBase } from "./style";

// type
import type { ChildrenAlias } from "@/types/Common";
import type { ComponentProps } from "@/types/Common";

interface FormControlProps extends ComponentProps {
  children: ChildrenAlias;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export const FormControl = ({
  children,
  className,
  sx,
  onSubmit,
}: FormControlProps) => {
  return (
    <FormControlBase className={className} $sx={sx} onSubmit={onSubmit}>
      {children}
    </FormControlBase>
  );
};
