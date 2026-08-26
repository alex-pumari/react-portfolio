import { useState } from "react";
import { PageContext, ZoomContext, FullScreenContext } from "./contexts/index.js";
import type { Page, ZoomValue } from "./types/index.js";
import "./styles/index.scss";

export function App() {
  const [view, setView] = useState<ViewId>("home");
  const [zoom, setZoom] = useState<number>(100);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const isRepositoriesPage = page === 3;
  const isImmersiveMode = isRepositoriesPage || isFullScreen;
  const toggleFullScreen = () => setIsFullScreen((isFullScreen) =>!isFullScreen);

  return (
    <PageContext.Provider value={{ page, setPage }}>
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
    </PageContext.Provider>
  );
}