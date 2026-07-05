import type { Meta, StoryObj } from "@storybook/react-vite"
import { Stepper } from "./stepper.js"
import { useState } from "react"

const meta = {
  title: "Components/Interface/Stepper",
  component: Stepper,
    parameters: {
    layout: "centered"
  },
  args: {
    value: 1,
    min: 1,
    max: 5,
  },  
} satisfies Meta<typeof Stepper>

export default meta

type Story = StoryObj<typeof meta>

export const regular: Story = {}

export const customLabel: Story = {
  args: {
    label: (value, max, _min) => `Page ${value} of ${max}`
  }
}

export const disabled: Story = {
  args: {
    disabled: true
  }
}

export const AtMax: Story = {
  args: {
    value: 5,
  },
}

export const AtMin: Story = {
  args: {
    value: 1,
  },
}

export const InfiniteAtMax: Story = {
  args: {
    value: 5,
    infinite: true,
  },
}

export const InfiniteAtMin: Story = {
  args: {
    value: 1,
    infinite: true,
  },
}

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 1)

    return (
      <Stepper {...args} value={value} onChange={setValue} />
    )
  },
}