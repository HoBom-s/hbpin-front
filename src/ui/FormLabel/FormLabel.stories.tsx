import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

// project
import { FormLabel } from "./FormLabel";
import { TextField } from "..";

type Story = StoryObj<typeof FormLabel>;

const FormLabelStoryBook: Meta<typeof FormLabel> = {
  title: "UI/FormLabel",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: FormLabel,
};

export const Default: Story = {
  args: {
    className: "HoBom's FormLabel component",
    label: "Username",
    isRequired: true,
    sx: {},
  },
  render: (args) => {
    // eslint-disable-next-line
    const [value, setValue] = useState<string>("");

    return (
      <div>
        <FormLabel {...args} />
        <TextField
          type="text"
          placeholder="Username"
          name="Username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};

export default FormLabelStoryBook;
