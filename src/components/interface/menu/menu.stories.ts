import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "./menu.js";

const meta = {
  title: "Components/Interface/Menu",
  component: Menu,
    parameters: {
    layout: "centered"
  },
  args: {
    items: [
      "Apple",
      "Orange",
      "Milk",
    ],
  }
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>

export const Regular: Story = {};

export const WithSelectedItem: Story = {
  args: {
    selectedItem: "Milk",
  }
};
