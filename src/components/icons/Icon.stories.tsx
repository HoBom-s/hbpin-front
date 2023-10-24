import { Meta, StoryObj } from "@storybook/react";

// project
import { Icon } from "..";

// assets
import { theme } from "@/assets";

type Story = StoryObj<typeof Icon>;

const IconStorybook: Meta<typeof Icon> = {
  title: "COMPONENTS/Icon",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Icon,
};

export const Default: Story = {
  args: {
    icon: "star",
    color: theme.colors.black700,
    size: "12px",
  },
};

export default IconStorybook;
