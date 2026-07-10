import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Home } from "./home.js";

const meta = {
  title: "Views/Home",
  component: Home,
  args: {
    onViewChange: fn(),
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};