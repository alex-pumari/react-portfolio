import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel } from "./panel.js";

const meta: Meta<typeof Panel> = {
  title: "Components/Panel",
  component: Panel,
  tags: ["autodocs"],
  argTypes: {
    screwOffset: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    hasElevation: {
      control: "boolean",
    },
  },
  args: {
    children: "Panel content",
    screwOffset: "md",
    hasElevation: false,
  },
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    children: "Default panel",
  },
};

export const SmallScrewOffset: Story = {
  args: {
    children: "Small screw offset",
    screwOffset: "sm",
  },
};

export const MediumScrewOffset: Story = {
  args: {
    children: "Medium screw offset",
    screwOffset: "md",
  },
};

export const LargeScrewOffset: Story = {
  args: {
    children: "Large screw offset",
    screwOffset: "lg",
  },
};

export const Elevated: Story = {
  args: {
    children: "Elevated panel",
    hasElevation: true,
  },
};

export const Clickable: Story = {
  args: {
    children: "Clickable panel",
    onClick: () => console.log("clicked"),
  },
};