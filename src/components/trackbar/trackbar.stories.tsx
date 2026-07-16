import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Trackbar, type TrackbarProps } from "./trackbar.js";

const meta: Meta<typeof Trackbar> = {
  title: "Components/Trackbar",
  component: Trackbar,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 300,
        step: 1,
      },
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
    onChange: {
      action: "changed",
    },
  },
  args: {
    value: 100,
    min: 50,
    max: 200,
    step: 10,
  },
};

export default meta;

type Story = StoryObj<typeof Trackbar>;

const Interactive = (args: TrackbarProps) => {
  const [value, setValue] = useState(args.value);

  return (
    <div style={{ width: 420 }}>
      <Trackbar
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          args.onChange?.(newValue);
        }}
      />
    </div>
  );
};

export const Playground: Story = {
  render: Interactive,
};

export const Default: Story = {
  render: Interactive,
};

export const MinimumValue: Story = {
  render: Interactive,
  args: {
    value: 50,
  },
};

export const MaximumValue: Story = {
  render: Interactive,
  args: {
    value: 200,
  },
};

export const FineControl: Story = {
  render: Interactive,
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 35,
  },
};

export const LargeRange: Story = {
  render: Interactive,
  args: {
    min: 25,
    max: 400,
    step: 25,
    value: 150,
  },
};