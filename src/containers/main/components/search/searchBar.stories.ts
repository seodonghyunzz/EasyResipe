import type { Meta, StoryObj } from "@storybook/nextjs";
import { SearchBar } from "./searchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Main/Search/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    setName: { action: "setName" },
    SearchRecipe: { action: "SearchRecipe" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setName: () => {},
    SearchRecipe: () => {},
  },
};
