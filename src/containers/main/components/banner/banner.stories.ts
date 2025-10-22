import type { Meta, StoryObj } from "@storybook/nextjs";
import { Banner } from "./banner";

const meta: Meta<typeof Banner> = {
  title: "Main/Banner/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
