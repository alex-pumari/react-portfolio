import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ViewId } from "../types/view-id.js";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";
import { Layout } from "./layout.js";
import { Home } from "../views/home/home.js";
import { AboutMe } from "../views/about-me/about-me.js";
import { Projects } from "../views/projects/projects.js";
import { Contact } from "../views/contact/contact.js";

const meta = {
  title: "Layout/Layout",
  component: Layout,
  args: {
    activeView: "home",
    onViewChange: fn(),
    children: <Home />,
  },
  argTypes: {
    activeView: {
      control: "select",
      options: ["home", "about-me", "projects", "contact"],
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

const views: Record<ViewId, React.ReactNode> = {
  "home": <Home />,
  "about-me": <AboutMe />,
  "projects": <Projects />,
  "contact": <Contact />,
};

export const Playground: Story = {
  args: {
    activeView: "home",
  },
  render: (args) => {
    const [{ activeView }, updateArgs] = useArgs<{ activeView: ViewId }>();

    return (
      <Layout
        {...args}
        activeView={activeView}
        onViewChange={(view) => updateArgs({ activeView: view })}
      >
        {views[activeView]}
      </Layout>
    );
  },
};