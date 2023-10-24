import { Meta, StoryObj } from "@storybook/react";

// project
import { GlobalFallback } from "./GlobalFallback";

type Story = StoryObj<typeof GlobalFallback>;

const GlobalFallbackStoryBook: Meta<typeof GlobalFallback> = {
  title: "COMPONENTS/GlobalFallback",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: GlobalFallback,
};

export const Default: Story = {
  args: {
    error: null,
  },
};

export default GlobalFallbackStoryBook;
