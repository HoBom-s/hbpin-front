import { ChangeEvent } from "react";
import { Meta, StoryObj } from "@storybook/react";

// project
import { ImmigrationForm } from "..";
import { isPassword } from "@/utils/is";

type Story = StoryObj<typeof ImmigrationForm>;

const ImmigrationFormStoryBook: Meta<typeof ImmigrationForm> = {
  title: "COMPONENTS/ImmigrationForm",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: ImmigrationForm,
};

export const Defaul: Story = {
  args: {
    formValue: {
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
    },
    onFormValueChangeEvent: (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
  },
};

export default ImmigrationFormStoryBook;
