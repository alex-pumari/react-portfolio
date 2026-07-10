import type { Meta, StoryObj } from "@storybook/react-vite";
import { AboutMe } from "./about-me.js";

const meta = {
  title: "Views/AboutMe",
  component: AboutMe,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AboutMe>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};