import type { Meta, StoryObj } from "@storybook/react";
import { WindowCard } from "./window-card.js";
import { Button } from "../button/button.js";

const meta: Meta<typeof WindowCard> = {
  title: "Components/WindowCard",
  component: WindowCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
  },
  args: {
    title: "Portfolio.exe",
    children: (
      <p>
        Welcome! This is an example of a retro desktop window component.
      </p>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof WindowCard>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    title: "About Me",
    children: (
      <>
        <p>Hello! I'm Alex.</p>
        <p>I build web applications using React and TypeScript.</p>
      </>
    ),
  },
};

export const WithControls: Story = {
  args: {
    title: "Explorer",
    controls: {
      onMinimize: () => alert("Minimize"),
      onMaximize: () => alert("Maximize"),
      onClose: () => alert("Close"),
    },
    children: (
      <p>Window controls are enabled.</p>
    ),
  },
};

export const CloseOnly: Story = {
  args: {
    title: "Warning",
    controls: {
      onClose: () => alert("Close"),
    },
    children: (
      <p>This window can only be closed.</p>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: "Settings",
    children: (
      <p>Choose your preferences.</p>
    ),
    footerActions: (
      <>
        <Button variant="secondary">
          Cancel
        </Button>

        <Button>
          Save
        </Button>
      </>
    ),
  },
};

export const FullWindow: Story = {
  args: {
    title: "Portfolio",
    controls: {
      onMinimize: () => alert("Minimize"),
      onMaximize: () => alert("Maximize"),
      onClose: () => alert("Close"),
    },
    children: (
      <>
        <h3>Projects</h3>

        <p>
          This window demonstrates every feature available on the
          component.
        </p>

        <ul>
          <li>Window controls</li>
          <li>Scrollable content</li>
          <li>Footer actions</li>
        </ul>
      </>
    ),
    footerActions: (
      <>
        <Button variant="ghost">
          Help
        </Button>

        <Button>
          Continue
        </Button>
      </>
    ),
  },
};