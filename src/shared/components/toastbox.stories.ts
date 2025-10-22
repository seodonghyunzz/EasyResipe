import type { Meta, StoryObj } from "@storybook/nextjs";
import { ToastBox } from "./toastbox";

const meta: Meta<typeof ToastBox> = {
  title: "Shared/ToastBox",
  component: ToastBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    msg: {
      control: "text",
      description: "Toast 메시지 내용",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    msg: "기본 토스트 메시지입니다.",
  },
};

export const Success: Story = {
  args: {
    msg: "성공적으로 저장되었습니다!",
  },
};

export const Error: Story = {
  args: {
    msg: "오류가 발생했습니다. 다시 시도해주세요.",
  },
};

export const LongMessage: Story = {
  args: {
    msg: "이것은 매우 긴 토스트 메시지입니다. 화면에서 어떻게 표시되는지 확인해보세요.",
  },
};
