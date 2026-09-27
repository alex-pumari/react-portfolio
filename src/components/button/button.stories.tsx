import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button.js";
import { DownloadIcon, CheckIcon, TrashIcon } from "./button-icons.js";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "success",
        "danger",
        "soft",
      ],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
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
    icon: {
      control: false,
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    shadow: "md",
    loading: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Soft: Story = {
  args: {
    children: "Soft",
    variant: "soft",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
    icon: <CheckIcon />,
  },
};

export const Danger: Story = {
  args: {
    children: "Delete",
    variant: "danger",
    icon: <TrashIcon />,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: "Download",
    icon: <DownloadIcon />,
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const ShadowSmall: Story = {
  args: {
    children: "Small Shadow",
    shadow: "sm",
  },
};

export const ShadowMedium: Story = {
  args: {
    children: "Medium Shadow",
    shadow: "md",
  },
};

export const ShadowLarge: Story = {
  args: {
    children: "Large Shadow",
    shadow: "lg",
  },
};

export const IconOnly: Story = {
  args: {
    icon: <DownloadIcon />,
    "aria-label": "Download",
    children: null,
  },
};