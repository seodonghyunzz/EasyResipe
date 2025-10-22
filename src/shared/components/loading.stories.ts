import type { Meta, StoryObj } from "@storybook/nextjs";
import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
  title: "Shared/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
