import { Meta, StoryObj } from "@storybook/react";

// project
import { Text } from "..";

type Story = StoryObj<typeof Text>;

const TextStoryBook: Meta<typeof Text> = {
  title: "UI/Text",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Text,
};

export const Default: Story = {
  args: {
    className: "HoBom's Text component",
    variant: "normal",
    children: "안녕 ! 호봄.",
    sx: {},
  },
};

export const Subtitle: Story = {
  args: {
    className: "HoBom's Text component",
    variant: "subtitle",
    children: "안녕 ! 호봄.",
    sx: {},
  },
};

export default TextStoryBook;
