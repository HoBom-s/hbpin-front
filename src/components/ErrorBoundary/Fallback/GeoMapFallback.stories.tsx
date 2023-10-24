import { Meta, StoryObj } from "@storybook/react";

// project
import { GeoMapFallback } from "./GeoMapFallback";

type Story = StoryObj<typeof GeoMapFallback>;

const GlobalFallbackStoryBook: Meta<typeof GeoMapFallback> = {
  title: "COMPONENTS/GeoMapFallback",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: GeoMapFallback,
};

export const Default: Story = {
  args: {
    error: null,
    onReset: () => window.location.reload(),
  },
};

export default GlobalFallbackStoryBook;
