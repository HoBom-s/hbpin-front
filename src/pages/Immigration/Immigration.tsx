// hook
import { useForm } from "@/hooks";

// project
import { ImmigrationForm } from "@/components";
import { Box } from "@/ui";

// util
import { isPassword } from "@/utils/is";

export const Immigration = () => {
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

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: "16px",
          minWidth: "320px",
          maxWidth: "600px",
        }}
      >
        <ImmigrationForm
          formValue={formValue}
          onFormValueChangeEvent={handleFormValueChange}
        />
      </Box>
    </Box>
  );
};
