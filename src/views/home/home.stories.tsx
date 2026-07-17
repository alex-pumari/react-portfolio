import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home } from "./home.js";

const meta = {
  title: "Views/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};