import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";
import { Modal } from "./modal.js";
import { Button } from "../button/button.js";

const defaultModal = {
  title: "Example Modal",
  children: "This is the modal content. Use the Storybook controls to experiment with the modal.",
};

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    isOpen: true,
    title: defaultModal.title,
    onClose: () => {},
    children: defaultModal.children,
    closeOnBackdropClick: true,
  },

  argTypes: {
    isOpen: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
    closeOnBackdropClick: {
      control: "boolean",
    },
    onClose: {
      action: "closed",
    },
    footerActions: {
      control: false,
    },
    children: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const renderModal = (args: Story["args"]) => {
  const [{ isOpen }, updateArgs] = useArgs();

  const handleOpen = () => {
    updateArgs({ isOpen: true });
  };

  const handleClose = () => {
    updateArgs({ isOpen: false });
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>

      <Modal
        {...args}
        title={args?.title ?? defaultModal.title}
        children={args?.children ?? defaultModal.children}
        isOpen={isOpen ?? false}
        onClose={handleClose}
      />
    </>
  );
};

export const Playground: Story = {
  render: renderModal,
};

export const WithFooterActions: Story = {
  args: {
    title: "Modal with Actions",
    footerActions: (
      <div style={{ display: "flex", gap: "8px" }}>
        <Button size="sm" variant="secondary">
          Cancel
        </Button>

        <Button size="sm">
          Confirm
        </Button>
      </div>
    ),
  },
  render: renderModal,
};

export const NoBackdropClose: Story = {
  args: {
    title: "Modal - Click Backdrop Disabled",
    closeOnBackdropClick: false,
  },
  render: renderModal,
};