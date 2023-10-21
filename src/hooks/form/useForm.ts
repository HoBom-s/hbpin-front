import { useState, useCallback, ChangeEvent } from "react";

interface FormValue {
  [name: string]: {
    value: string | number;
    errMsg?: string;
    isValid: boolean;
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
      errMsg: "",
      isValid: false,
      validate: (v: string | number) => (v as string).length > 2,
    },
    password: {
      value: "",
      errMsg: "",
      isValid: false,
      validate: (v: string | number) => (v as string).length > 2,
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
              isValid: true,
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
              isValid: false,
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
