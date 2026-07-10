import type { Meta, StoryObj } from "@storybook/react-vite";
import { Contact } from "./contact.js";

const meta = {
  title: "Views/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};