import { Meta, StoryObj } from "@storybook/react";

// project
import { Spinner } from "./Spinner";

type Story = StoryObj<typeof Spinner>;

const SpinnerStoryBook: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
};

export const Default: Story = {
  args: {
    size: "md",
    color: "#5652bf",
  },
};

export default SpinnerStoryBook;
