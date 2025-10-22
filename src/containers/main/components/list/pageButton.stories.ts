import type { Meta, StoryObj } from "@storybook/nextjs";
import { PageButton } from "./pageButton";

const meta: Meta<typeof PageButton> = {
  title: "Main/List/PageButton",
  component: PageButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    pageArr: {
      control: "object",
      description: "페이지 번호 배열",
    },
    currentPage: {
      control: "number",
      description: "현재 페이지 번호",
    },
    getPrevPageGroup: { action: "getPrevPageGroup" },
    getPrevPage: { action: "getPrevPage" },
    getButtonPage: { action: "getButtonPage" },
    getNextPage: { action: "getNextPage" },
    getNextPageGroup: { action: "getNextPageGroup" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageArr: [1, 2, 3, 4, 5],
    currentPage: 1,
    getPrevPageGroup: () => {},
    getPrevPage: () => {},
    getButtonPage: () => {},
    getNextPage: () => {},
    getNextPageGroup: () => {},
  },
};

export const MiddlePage: Story = {
  args: {
    pageArr: [6, 7, 8, 9, 10],
    currentPage: 8,
    getPrevPageGroup: () => {},
    getPrevPage: () => {},
    getButtonPage: () => {},
    getNextPage: () => {},
    getNextPageGroup: () => {},
  },
};

export const LastPage: Story = {
  args: {
    pageArr: [16, 17, 18, 19, 20],
    currentPage: 20,
    getPrevPageGroup: () => {},
    getPrevPage: () => {},
    getButtonPage: () => {},
    getNextPage: () => {},
    getNextPageGroup: () => {},
  },
};

export const FewPages: Story = {
  args: {
    pageArr: [1, 2, 3],
    currentPage: 2,
    getPrevPageGroup: () => {},
    getPrevPage: () => {},
    getButtonPage: () => {},
    getNextPage: () => {},
    getNextPageGroup: () => {},
  },
};
