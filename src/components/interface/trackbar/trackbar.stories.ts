import type { Meta, StoryObj } from "@storybook/react-vite"
import { Trackbar } from "./trackbar.js"

const meta = {
  title: "Components/Interface/Trackbar",
  component: Trackbar,
    parameters: {
    layout: "centered"
  },
  args: {
    min: 60,
    max: 140,
    step: 20,
  }
} satisfies Meta<typeof Trackbar>

export default meta

type Story = StoryObj<typeof meta>

export const atMinValue: Story = {
  args: {
    value: 60,
  }
}

export const atMaxValue: Story = {
  args: {
    value: 140,
  }
}