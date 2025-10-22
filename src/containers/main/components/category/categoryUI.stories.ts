import type { Meta, StoryObj } from "@storybook/nextjs";
import { CategoryUi } from "./categoryUI";

const meta: Meta<typeof CategoryUi> = {
  title: "Main/Category/CategoryUI",
  component: CategoryUi,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    categoryArr: {
      control: "object",
      description: "카테고리 배열",
    },
    activeCategory: {
      control: "text",
      description: "현재 활성화된 카테고리",
    },
    setActiveCategory: { action: "setActiveCategory" },
    goToCategory: { action: "goToCategory" },
    goToHome: { action: "goToHome" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categoryArr: ["밥", "국", "반찬", "후식"],
    activeCategory: null,
    setActiveCategory: () => {},
    goToCategory: () => {},
    goToHome: () => {},
  },
};

export const WithActiveCategory: Story = {
  args: {
    categoryArr: ["밥", "국", "반찬", "후식"],
    activeCategory: "밥",
    setActiveCategory: () => {},
    goToCategory: () => {},
    goToHome: () => {},
  },
};

export const ManyCategories: Story = {
  args: {
    categoryArr: ["밥", "국", "반찬", "후식", "음료", "간식", "샐러드", "스프"],
    activeCategory: "반찬",
    setActiveCategory: () => {},
    goToCategory: () => {},
    goToHome: () => {},
  },
};

export const NoCategories: Story = {
  args: {
    categoryArr: [],
    activeCategory: null,
    setActiveCategory: () => {},
    goToCategory: () => {},
    goToHome: () => {},
  },
};
