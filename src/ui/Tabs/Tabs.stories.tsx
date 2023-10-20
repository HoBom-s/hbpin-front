import { useState, MouseEvent } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Tabs, Tab } from "..";

type Story = StoryObj<typeof Tabs>;

const TabsStoryBook: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Tabs,
};

export const Default: Story = {
  args: {
    fullWidth: false,
    sx: {},
  },
  render: () => {
    // eslint-disable-next-line
    const [value, setValue] = useState<number>(1);

    const items = [1, 2];

    const handleChange = (_: MouseEvent, item: number) => {
      setValue(item);
    };

    return (
      <Tabs value={value} onChange={handleChange}>
        {items.map((v: number) => (
          <Tab key={v} label={`TAB ${v}`} value={v} />
        ))}
      </Tabs>
    );
  },
};

export default TabsStoryBook;
