import type { Meta, StoryObj } from "@storybook/react-vite";
import type { MenuItem } from "../../types/menu-item.js";
import { useState } from "react";
import { DropdownButton } from "./dropdown-button.js";

const mockItems: MenuItem[] = [
  { id: "option1", label: "Option 1" },
  { id: "option2", label: "Option 2" },
  { id: "option3", label: "Option 3" },
  { id: "option4", label: "Option 4" },
];

const meta: Meta<typeof DropdownButton> = {
  title: "Components/DropdownButton",
  component: DropdownButton,
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
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onSelect: {
      action: "selected",
    },
  },
  args: {
    children: "Select Option",
    items: mockItems,
    variant: "primary",
    size: "md",
    loading: false,
    disabled: false,
    menuLabel: "Available options",
  },
};

export default meta;

type Story = StoryObj<typeof DropdownButton>;

const renderDropdownButton = (args: Story["args"]) => {
  const [selectedItem, setSelectedItem] = useState<string>("option1");

  return (
    <DropdownButton
      {...args}
      items={args?.items || mockItems}
      selectedId={selectedItem}
      onSelect={setSelectedItem}
    />
  );
};

export const Playground: Story = {
  render: renderDropdownButton,
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: renderDropdownButton,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: renderDropdownButton,
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: renderDropdownButton,
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
  render: renderDropdownButton,
};

export const Success: Story = {
  args: {
    variant: "success",
  },
  render: renderDropdownButton,
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
  render: renderDropdownButton,
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: renderDropdownButton,
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  render: renderDropdownButton,
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: renderDropdownButton,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: renderDropdownButton,
};