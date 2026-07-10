import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Layout } from "./layout.js";
import { Home } from "../views/home/home.js";

const meta = {
  title: "Layout/Layout",
  component: Layout,
  args: {
    activeView: "home",
    onViewChange: fn(),
    children: <Home />,
  },
  argTypes: {
    activeView: {
      control: "select",
      options: ["home", "about-me", "projects", "contact"],
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};