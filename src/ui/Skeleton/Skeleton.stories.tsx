import { Meta, StoryObj } from "@storybook/react";

// project
import { Skeleton } from "..";

type Story = StoryObj<typeof Skeleton>;

const SkeletonStorybook: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Skeleton,
};

export const Default: Story = {
  args: {
    rounded: true,
  },
  render: () => {
    return (
      <Skeleton.Wrapper sx={{ width: "180px", height: "210px" }}>
        <Skeleton.Wrapper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "50px",
            gap: "8px",
            mb: "4px",
          }}
        >
          <Skeleton rounded sx={{ mb: "4px" }} />
          <Skeleton
            rounded
            sx={{
              height: "50px",
              borderRadius: "50%",
            }}
          />
        </Skeleton.Wrapper>
        <Skeleton rounded sx={{ mb: "4px" }} />
        <Skeleton rounded sx={{ mb: "4px" }} />
        <Skeleton rounded sx={{ mb: "4px" }} />
      </Skeleton.Wrapper>
    );
  },
};

export default SkeletonStorybook;
