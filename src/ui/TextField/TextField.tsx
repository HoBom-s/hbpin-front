import { ChangeEvent } from "react";
import { TextFieldBase, InputBase } from "./style";

// type
import type { ComponentProps } from "@/types/Common";

interface TextFieldProps extends ComponentProps {
  type: "password" | "email" | "text";
  placeholder: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  className,
  type = "text",
  placeholder,
  name,
  value,
  sx,
  onChange,
}: TextFieldProps) => {
  return (
    <TextFieldBase>
      <InputBase
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        $sx={sx}
        onChange={onChange}
      />
    </TextFieldBase>
  );
};
