import { Meta, StoryObj } from "@storybook/react";

// project
import { Spot } from "..";

type Story = StoryObj<typeof Spot>;

const SpotStorybook: Meta<typeof Spot> = {
  title: "COMPONENTS/Spot",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Spot,
};

export const Default: Story = {
  args: {
    name: "호랑이카페",
    rating: 5,
    spotImageUrl: "https://picsum.photos/id/1/500/500",
    address: "중구 을지로 157",
    business: "영업 중 ⋅ 오후 9:00에 영업 종료",
    mealKind: "매장 내 식사 ⋅ 테이크아웃",
  },
};

export default SpotStorybook;
