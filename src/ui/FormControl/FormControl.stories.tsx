import { ChangeEvent, FormEvent, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

// project
import { Box } from "..";
import { FormControl, TextField } from "..";
import { FormLabel } from "..";
import { Button } from "..";

type Story = StoryObj<typeof FormControl>;

const FormStoryBook: Meta<typeof FormControl> = {
  title: "UI/FormControl",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: FormControl,
};

export const Default: Story = {
  args: {
    className: "HoBom's FormControl component",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: "16px",
      border: "1px solid black",
      borderRadius: "6px",
    },
  },
  render: () => {
    const [formValue, setFormValue] = useState({
      username: "",
      passowrd: "",
    });

    const handleFormValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setFormValue((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    };

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(formValue);
    };

    return (
      <FormControl onSubmit={handleFormSubmit}>
        <Box sx={{ mb: "16px" }}>
          <FormLabel label="Username" isRequired />
          <TextField
            type="text"
            placeholder="Username"
            name="username"
            value={formValue.username}
            onChange={handleFormValueChange}
          />
        </Box>
        <Box sx={{ mb: "16px" }}>
          <FormLabel label="Password" isRequired />
          <TextField
            type="password"
            placeholder="Password"
            name="passowrd"
            value={formValue.passowrd}
            onChange={handleFormValueChange}
          />
        </Box>
        <Button
          variant="outlined"
          label="SUBMIT"
          type="submit"
          fullWidth
          size="md"
        />
      </FormControl>
    );
  },
};

export default FormStoryBook;
