import type { Meta, StoryObj } from "@storybook/nextjs";
import { NoResult } from "./noResult";

const meta: Meta<typeof NoResult> = {
  title: "Shared/NoResult",
  component: NoResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
