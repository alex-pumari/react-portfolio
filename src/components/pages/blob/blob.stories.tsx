import type { Meta, StoryObj } from "@storybook/react-vite"
import { Blob } from "./blob.js"

const sizes = ["sm", "md", "lg"] as const

const meta = {
  title: "Components/Pages/Blob",
  component: Blob,
    parameters: {
    layout: "centered"
  },
} satisfies Meta<typeof Blob>

export default meta

type Story = StoryObj<typeof meta>

export const shapeA: Story = {
  args: {
    shape: "a",
  },
}

export const shapeB: Story = {
  args: {
    shape: "b",
  },
}

export const shapeC: Story = {
  args: {
    shape: "c",
  },
}