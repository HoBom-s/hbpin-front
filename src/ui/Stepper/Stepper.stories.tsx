import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

// project
import { Stepper } from "..";

type Story = StoryObj<typeof Stepper>;

const StepperStoryBook: Meta<typeof Stepper> = {
  title: "UI/Stepper",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Stepper,
};

export const Default: Story = {
  args: {
    sx: {},
  },
  render: () => {
    // eslint-disable-next-line
    const [activeStep, setActiveStep] = useState<number>(1);

    const steps: string[] = ["회원정보", "커플장소", "약관"];

    const handlePrevButtonClick = () => {
      if (activeStep === 1) {
        return;
      }

      setActiveStep((prev: number) => prev - 1);
    };

    const handleStepButtonClick = (stepNum: number) => {
      setActiveStep(stepNum);
    };

    const handleNextButtonClick = () => {
      if (activeStep === steps.length) {
        return;
      }

      setActiveStep((prev: number) => prev + 1);
    };

    return (
      <Stepper
        activeStep={activeStep}
        steps={steps}
        onPrevButtonClick={handlePrevButtonClick}
        onStepButtonClick={handleStepButtonClick}
        onNextButtonClick={handleNextButtonClick}
      />
    );
  },
};

export default StepperStoryBook;
