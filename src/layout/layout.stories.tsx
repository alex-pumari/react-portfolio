import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ViewId } from "../types/view-id.js";
import { Layout } from "./layout.js";
import { useArgs, useState } from "storybook/preview-api";
import { fn } from "storybook/test";
import { Home } from "../views/home/home.js";
import { views } from "./views.js";
import { ViewContext } from "../contexts/view.js";
import { ZoomContext } from "../contexts/zoom.js";
import { FullScreenContext } from "../contexts/full-screen.js";

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

export const Playground: Story = {
  render: (args) => {
    const [{ activeView }, updateArgs] = useArgs<{ activeView: ViewId }>();
    const [zoom, setZoom] = useState<number>(100);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

    const toggleFullScreen = () => setIsFullScreen((isFullScreen) =>!isFullScreen);

    const handleViewChange = (
      view: ViewId | ((currentView: ViewId) => ViewId)
    ) => {
      const isViewUpdater = typeof view === "function";
      const nextView = isViewUpdater ? view(activeView) : view;

      updateArgs({ activeView: nextView });
    };

    const ViewComponent = views[activeView];

    return (
      <ViewContext.Provider value={{ view: activeView, setView: handleViewChange }}>
        <ZoomContext.Provider value={{ zoom, setZoom }}>
          <FullScreenContext.Provider value={{ isFullScreen, toggleFullScreen }}>
            <Layout
              {...args}
              activeView={activeView}
              onViewChange={handleViewChange}
            >
              <ViewComponent />
            </Layout>
          </FullScreenContext.Provider>
        </ZoomContext.Provider>
      </ViewContext.Provider>
    );
  },
};