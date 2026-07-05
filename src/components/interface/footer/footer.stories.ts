import type { Meta, StoryObj } from "@storybook/react-vite"
import { Footer } from "./footer.js"

const meta = {
  title: "Components/Interface/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen"
  },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const regular: Story = {}