import { Meta, StoryObj } from "@storybook/react";

// project
import { Box } from "./Box";

type Story = StoryObj<typeof Box>;

const BoxStoryBook: Meta<typeof Box> = {
  title: "UI/Box",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Box,
};

export const Default: Story = {
  args: {
    className: "HoBom's Box component",
    children: <span>Hello HoBom Box</span>,
    sx: {
      width: "300px",
      height: "150px",
      color: "pink",
      border: "1px solid red",
      borderRadius: "8px",
      p: "8px",
      m: "10px",
    },
  },
};

export default BoxStoryBook;
