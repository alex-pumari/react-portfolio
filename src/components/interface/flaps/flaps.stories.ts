import type { Meta, StoryObj } from "@storybook/react-vite"
import { Flaps } from "./flaps.js"

const meta = {
  title: "Components/Interface/Flaps",
  component: Flaps,
    parameters: {
    layout: "fullscreen"
  },
} satisfies Meta<typeof Flaps>

export default meta

type Story = StoryObj<typeof meta>

export const regular: Story = {
  args: {
    flaps: [
      "File",
      "Edit",
      "View",
    ],
    selectedFlap: "File",
  }
}