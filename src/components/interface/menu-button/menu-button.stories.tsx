import type { Meta, StoryObj } from "@storybook/react-vite"
import { MenuButton } from "./menu-button.js"

const meta = {
  title: "Components/Interface/MenuButton",
  component: MenuButton,
    parameters: {
    layout: "centered"
  },
  args: {
    label: "Favorite",
    items: [
      "Milk",
      "Bread",
      "Pizza",
    ]
  },
} satisfies Meta<typeof MenuButton>

export default meta

type Story = StoryObj<typeof meta>

export const open: Story = {
  args: {
    initialIsOpen: true,
  },
  render: (args) => (
    <div
      style={{ width: "40em", display: "flex", flexWrap: "wrap", gap: "14em 9em" }}
    >
      <MenuButton {...{...args, direction: "bottom-left"}}/>
      <MenuButton {...{...args, direction: "bottom", selectedItem: "Pizza"}}/>
      <MenuButton {...{...args, direction: "bottom-right"}}/>
      <MenuButton {...{...args, direction: "top-left"}}/>
      <MenuButton {...{...args, direction: "top", selectedItem: "Pizza"}}/>
      <MenuButton {...{...args, direction: "top-right" }}/>
    </div>
  )
}

export const closed: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10em" }}>
      <MenuButton {...{...args, direction: "bottom"}}/>
      <MenuButton {...{...args, direction: "top"}}/>
    </div>
  )
}

export const withFormat: Story = {
  args: {
    renderItem: item => `1Kg - ${item}`,
    initialIsOpen: true,
  }
}