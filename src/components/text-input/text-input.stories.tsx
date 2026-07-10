import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./text-input.js";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "number"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithHint: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "john@example.com",
    hint: "We'll never share your email.",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    value: "123",
    error: "Password must contain at least 8 characters.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Prefilled: Story = {
  args: {
    label: "Display Name",
    value: "Alex",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    hint: "Use at least 8 characters.",
  },
};

export const Search: Story = {
  args: {
    label: "Search",
    type: "search",
    placeholder: "Search projects...",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "Input without label",
    "aria-label": "Input without label",
  },
};

export const FormExample: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: 360,
      }}
    >
      <TextInput
        label="Username"
        placeholder="John Doe"
      />

      <TextInput
        label="Email"
        type="email"
        placeholder="john@example.com"
        hint="We'll never share your email."
      />

      <TextInput
        label="Password"
        type="password"
        error="Password is required."
      />
    </div>
  ),
};