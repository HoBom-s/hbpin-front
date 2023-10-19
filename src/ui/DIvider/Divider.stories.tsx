import { Meta, StoryObj } from "@storybook/react";

// project
import { Divider } from "..";

type Story = StoryObj<typeof Divider>;

const DividerStoryBook: Meta<typeof Divider> = {
  title: "UI/Divider",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Divider,
};

export const Default: Story = {
  args: {
    className: "HoBom's Divider component",
    sx: {},
  },
  render: () => {
    return (
      <div>
        <div style={{ width: "300px" }}>Hello</div>
        <Divider />
      </div>
    );
  },
};

export default DividerStoryBook;
