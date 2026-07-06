import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flap } from "./flap.js";

const meta = {
  title: "Components/Interface/Flap",
  component: Flap,
  parameters: {
    layout: "centered"
  },
  args: {
    value: "Images",
  }
} satisfies Meta<typeof Flap>;

export default meta;

type Story = StoryObj<typeof meta>

export const Selected: Story = {
  args: {
    selected: true,
  }
};

export const NotSelected: Story = {
  args: {
    selected: false,
  }
};