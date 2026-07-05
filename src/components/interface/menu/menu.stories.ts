import type { Meta, StoryObj } from "@storybook/react-vite"
import { Menu } from "./menu.js"

const meta = {
  title: "Components/Interface/Menu",
  component: Menu,
    parameters: {
    layout: "centered"
  },
  args: {
    items: [
      { value: "Apple" },
      { value: "Orange" },
      { value: "Milk" },
    ],
  }
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const regular: Story = {}

export const withSelectedItem: Story = {
  args: {
    selectedItem: "Milk",
  }
}
