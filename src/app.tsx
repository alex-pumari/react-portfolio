import type { ViewId } from "./types/index.js";
import { useState } from "react";
import { ViewContext, ZoomContext, FullScreenContext } from "./contexts/index.js";
import { Layout } from "./layout/layout.js";
import { views } from "./layout/views.js";
import "./styles/global.scss";

export function App() {
  const [view, setView] = useState<ViewId>("home");
  const [zoom, setZoom] = useState<number>(100);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const toggleFullScreen = () => setIsFullScreen((isFullScreen) =>!isFullScreen);
  const ViewComponent = views[view];

  return (
    <ViewContext.Provider value={{ view, setView }}>
      <ZoomContext.Provider value={{ zoom, setZoom }}>
        <FullScreenContext.Provider value={{ isFullScreen, toggleFullScreen }}>
          <Layout
            activeView={view}
            onViewChange={setView}
          >
            <ViewComponent />
          </Layout>
        </FullScreenContext.Provider>
      </ZoomContext.Provider>
    </ViewContext.Provider>
  );
}