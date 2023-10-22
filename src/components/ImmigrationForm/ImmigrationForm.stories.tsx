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
        errMsg: "Please check your username",
        placeholder: "Please enter your username",
        isValid: false,
        isRequired: true,
        validate: (v: string | number) => (v as string).length >= 1,
      },
      password: {
        value: "",
        type: "password",
        errMsg: "Please check your password",
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
