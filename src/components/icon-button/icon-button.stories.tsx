import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./icon-button.js";
import { TrashIcon } from "../button/button-icons.js";

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon Button",
  component: IconButton,
  tags: ["autodocs"],

  argTypes: {
    shadow: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },

    loading: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    onClick: {
      action: "clicked",
    },
  },

  args: {
    icon: <TrashIcon />,
    shadow: "md",
    loading: false,
    disabled: false,
    title: "Delete",
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ShadowSmall: Story = {
  args: {
    shadow: "sm",
  },
};

export const ShadowMedium: Story = {
  args: {
    shadow: "md",
  },
};

export const ShadowLarge: Story = {
  args: {
    shadow: "lg",
  },
};