import { useMemo } from "react";
import { StepperBase, StepperItemWrapper, StepperItemBase } from "./style";

// assets
import { theme } from "@/assets";

// project
import { Box, Button, Text } from "..";

// type
import type { ComponentProps } from "@/types/Common";

interface StepperProps extends ComponentProps {
  activeStep: number;

  steps: string[];

  onPrevButtonClick?: () => void;

  onStepButtonClick?: (stepNumber: number) => void;

  onNextButtonClick?: () => void;
}

export const Stepper = ({
  className,
  activeStep,
  steps,
  sx,
  onPrevButtonClick,
  onStepButtonClick,
  onNextButtonClick,
}: StepperProps) => {
  const totalStepLength: number = useMemo(() => steps.length, [steps]);

  const isPrevButtonActive = useMemo(() => activeStep === 1, [activeStep]);

  const isNextButtonActive = useMemo(
    () => activeStep === totalStepLength,
    [activeStep, totalStepLength],
  );

  return (
    <Box className={className} sx={{ width: "100%", p: "10px", ...sx }}>
      <StepperBase>
        {steps.map((step: string, idxNo: number) => (
          <StepperItemWrapper
            key={idxNo}
            onClick={() => onStepButtonClick && onStepButtonClick(idxNo + 1)}
          >
            <StepperItemBase $isActive={idxNo + 1 === activeStep} />
            <Text sx={{ fontWeight: theme.font.weight.fw700 }}>{step}</Text>
          </StepperItemWrapper>
        ))}
      </StepperBase>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          p: "10px",
        }}
      >
        <Button
          type="button"
          variant="outlined"
          label="prev"
          size="sm"
          flat
          disabled={isPrevButtonActive}
          onClick={onPrevButtonClick}
        />
        <Button
          type="button"
          variant="fill"
          label="next"
          size="sm"
          flat
          disabled={isNextButtonActive}
          onClick={onNextButtonClick}
        />
      </Box>
    </Box>
  );
};
