import type { Meta, StoryObj } from "@storybook/react-vite"
import { Header } from "./header.js"

const meta = {
  title: "Components/Interface/Header",
  component: Header,
  parameters: {
    layout: "fullscreen"
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const regular: Story = {}