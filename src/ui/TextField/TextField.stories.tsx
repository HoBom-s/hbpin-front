import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

// project
import { TextField } from "./TextField";

type Story = StoryObj<typeof TextField>;

const TextFieldStoryBook: Meta<typeof TextField> = {
  title: "UI/TextField",
  parameters: {
    layout: "centered",
  },
  tags: ["autoducs"],
  component: TextField,
};

export const Default: Story = {
  args: {
    className: "HoBom's TextField component",
    type: "text",
    placeholder: "Username",
    name: "Username",
    value: "",
    sx: { width: "100%", height: "48px" },
  },
  render: () => {
    const [value, setValue] = useState<string>("");

    return (
      <TextField
        type="text"
        placeholder="Username"
        name="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export default TextFieldStoryBook;
