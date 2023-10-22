import { useState, useCallback, ChangeEvent } from "react";

export interface FormValue {
  [name: string]: {
    value: string | number;
    errMsg?: string;
    type: "email" | "text" | "password";
    placeholder: string;
    isValid: boolean;
    isRequired: boolean;
    validate: (v: string | number) => boolean;
  };
}

interface FormValueReturn {
  formValue: FormValue;
  handleFormValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @example
    const { formValue, handleFormValueChange } = useForm({
      username: {
        value: "",
        type: "text",
        errMsg: "이름은 2글자 이상 입력해 주세요.",
        placeholder: "Please enter your username",
        isValid: false,
        isRequired: true,
        validate: (v: string | number) => (v as string).length >= 1,
      },
      password: {
        value: "",
        type: "password",
        errMsg:
          "비밀번호는 영문, 숫자, 특수기호를 조합하여 8 ~ 15자리로 입력해 주세요.",
        placeholder: "Please enter your username",
        isValid: false,
        isRequired: true,
        validate: (v: string | number) => isPassword(v as string),
      },
    });
 * 
 * @param {FormValue} param 
 * @returns 
 */
export const useForm = (param: FormValue): FormValueReturn => {
  const [formValue, setFormValue] = useState<FormValue>(param);

  const handleFormValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      if (formValue[name].validate(value)) {
        setFormValue((prev: FormValue) => {
          return {
            ...prev,
            [name]: {
              value: value,
              errMsg: prev[name].errMsg,
              type: prev[name].type,
              placeholder: prev[name].placeholder,
              isValid: true,
              isRequired: prev[name].isRequired,
              validate: prev[name].validate,
            },
          };
        });
      } else {
        setFormValue((prev: FormValue) => {
          return {
            ...prev,
            [name]: {
              value: value,
              errMsg: prev[name].errMsg,
              type: prev[name].type,
              placeholder: prev[name].placeholder,
              isValid: false,
              isRequired: prev[name].isRequired,
              validate: prev[name].validate,
            },
          };
        });
      }
    },
    [formValue],
  );

  return {
    formValue,
    handleFormValueChange,
  };
};
