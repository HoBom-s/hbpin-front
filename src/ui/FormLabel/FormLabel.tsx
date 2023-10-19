import { FormLabelBase } from "./style";

// type
import { ComponentProps } from "@/types/Common";

interface FormLabelProps extends ComponentProps {
  label: string;
  isRequired?: boolean;
}

export const FormLabel = ({
  className,
  label,
  isRequired = false,
  sx,
}: FormLabelProps) => {
  return (
    <FormLabelBase className={className} $sx={sx}>
      {label}
      {isRequired && <span style={{ color: "red", marginLeft: "4px" }}>*</span>}
    </FormLabelBase>
  );
};
