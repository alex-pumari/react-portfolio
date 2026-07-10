import type { Meta, StoryObj } from "@storybook/react-vite";
import { Projects } from "./projects.js";

const meta = {
  title: "Views/Projects",
  component: Projects,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Projects>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};