import { Meta, StoryObj } from "@storybook/react";

// project
import { QuickTabMenu } from "..";

type Story = StoryObj<typeof QuickTabMenu>;

const QuickTabMenuStorybook: Meta<typeof QuickTabMenu> = {
  title: "COMPONENTS/QuickTabMenu",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: QuickTabMenu,
};

export const Default: Story = {
  args: {
    name: "방문예정",
  },
};

export default QuickTabMenuStorybook;
