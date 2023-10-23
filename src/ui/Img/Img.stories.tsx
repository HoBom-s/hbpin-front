import { Meta, StoryObj } from "@storybook/react";

// project
import { Img } from "..";

type Story = StoryObj<typeof Img>;

const ImgStorybook: Meta<typeof Img> = {
  title: "UI/Img",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Img,
};

export const Default: Story = {
  args: {
    isLazy: true,
    src: "https://picsum.photos/id/1/500/500",
    placeholder: "https://picsum.photos/1/10/10",
    alt: "Image",
    bottomViewMargin: "100px",
  },
};

export default ImgStorybook;
