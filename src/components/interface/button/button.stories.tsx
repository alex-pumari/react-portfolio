import portfolioIcon from "../../../assets/img/icon-portfolio.png"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button.js"

const meta = {
  title: "Components/Interface/Button",
  component: Button,
    parameters: {
    layout: "centered"
  },
  args: {
    children: "Btn!",
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const sizes = ["sm", "md", "lg"] as const
const directions = ["column", "row"] as const

export const row: Story = {
  render: args => (
    <div style={{ display: "flex", gap: "1em" }}>
      {sizes.map(size => (
        <Button {...{ ...args, size, key: size }} />
      ))}
    </div>
  ),
}

export const column: Story = {
  render: args => (
    <div style={{ display: "flex", gap: "1em" }}>
      {sizes.map(size => (
        <Button {...{ ...args, size, key: size, direction: "column" }} />
      ))}
    </div>
  ),
}

export const disabled: Story = {
  args: {
    disabled: true,
  }
}

export const withIcon: Story = {
  render: args => (
    <div style={{ display: "flex", gap: "1em" }}>
      {directions.map(direction => (
          <Button
            {...args}
            direction={direction}
            size="lg"
          >
            <img height={18} src={portfolioIcon} alt="icon" />
            Click me!
          </Button>
        ))}
    </div>
  ),
}