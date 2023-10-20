import { Meta, StoryObj } from "@storybook/react";

// project
import { Stack } from "./Stack";

type Story = StoryObj<typeof Stack>;

const StackStoryBook: Meta<typeof Stack> = {
  title: "UI/Stack",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Stack,
};

export const Default: Story = {
  args: {
    className: "HoBom's Stack component",
    children: [
      <div style={{ border: "1px solid blue" }}>Hello</div>,
      <div style={{ border: "1px solid blue" }}>Hello</div>,
    ],
    direction: "col",
    align: "left",
    spacing: 2,
    sx: {
      width: "200px",
      height: "200px",
      border: "1px solid red",
      p: "10px",
    },
  },
};

export default StackStoryBook;
