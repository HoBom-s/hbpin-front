import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Button, Modal } from "..";

type Story = StoryObj<typeof Modal>;

const ModalStoryBook: Meta<typeof Modal> = {
  title: "UI/Modal",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Modal,
};

export const Default: Story = {
  args: {
    className: "HoBom's Modal component",
    isOpen: false,
    sx: {},
  },
  render: () => {
    // eslint-disable-next-line
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <div>
        <Button
          type="button"
          label="Modal Open"
          variant="fill"
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        />
        <Modal isOpen={isOpen}>
          <div>안녕 친구들</div>
          <Button
            type="button"
            label="Modal Close"
            variant="outlined"
            onClick={() => setIsOpen((prev: boolean) => !prev)}
          />
        </Modal>
      </div>
    );
  },
};

export default ModalStoryBook;
