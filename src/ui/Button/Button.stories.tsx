import { Meta, StoryObj } from "@storybook/react";

// project
import { Button } from "./Button";

type Story = StoryObj<typeof Button>;

const ButtonStoryBook: Meta<typeof Button> = {
  title: "UI/Button",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Button,
};

export const Outlined: Story = {
  args: {
    className: "HoBom's OutlinedButton component",
    variant: "outlined",
    fullWidth: false,
    label: "안녕 호봄 !",
    size: "md",
  },
};

export const Fill: Story = {
  args: {
    className: "HoBom's OutlinedButton component",
    variant: "fill",
    fullWidth: false,
    label: "안녕 호봄 !",
    size: "md",
  },
};

export default ButtonStoryBook;
