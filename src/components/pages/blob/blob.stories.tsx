import type { Meta, StoryObj } from "@storybook/react-vite";
import { Blob } from "./blob.js";

const meta = {
  title: "Components/Pages/Blob",
  component: Blob,
    parameters: {
    layout: "centered"
  },
} satisfies Meta<typeof Blob>;

export default meta;

type Story = StoryObj<typeof meta>

export const ShapeA: Story = {
  args: {
    shape: "a",
  },
};

export const ShapeB: Story = {
  args: {
    shape: "b",
  },
};

export const ShapeC: Story = {
  args: {
    shape: "c",
  },
};