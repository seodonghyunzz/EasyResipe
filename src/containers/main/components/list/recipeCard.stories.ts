import type { Meta, StoryObj } from "@storybook/nextjs";
import { RecipeCard } from "./recipeCard";

const meta: Meta<typeof RecipeCard> = {
  title: "Main/List/RecipeCard",
  component: RecipeCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    RCP_NM: {
      control: "text",
      description: "레시피 이름",
    },
    ATT_FILE_NO_MAIN: {
      control: "text",
      description: "메인 이미지 URL",
    },
    RCP_PAT2: {
      control: "text",
      description: "레시피 카테고리",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    RCP_NM: "김치찌개",
    ATT_FILE_NO_MAIN:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=200&fit=crop",
    RCP_PAT2: "한식",
  },
};

export const LongName: Story = {
  args: {
    RCP_NM: "매운 돼지고기 김치찌개와 두부 넣은 완전 맛있는 요리",
    ATT_FILE_NO_MAIN:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=200&fit=crop",
    RCP_PAT2: "한식",
  },
};

export const DifferentCategory: Story = {
  args: {
    RCP_NM: "스파게티 카르보나라",
    ATT_FILE_NO_MAIN:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=200&fit=crop",
    RCP_PAT2: "양식",
  },
};

export const NoImage: Story = {
  args: {
    RCP_NM: "이미지 없는 레시피",
    ATT_FILE_NO_MAIN: "",
    RCP_PAT2: "기타",
  },
};
