import { useState } from "react"
import { Header, Footer, Viewport } from "./components/interface/index.js"
import { PageContext, ZoomContext, FullScreenContext } from "./contexts/index.js"
import type { Page, ZoomValue } from "./types/index.js"
import "./styles/index.scss"

export default function App() {
  const [page, setPage] = useState<Page>(1)
  const [zoom, setZoom] = useState<ZoomValue>(100)
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  const isRepositoriesPage = page === 3
  const isImmersiveMode = isRepositoriesPage || isFullScreen
  const toggleFullScreen = () => setIsFullScreen((isFullScreen) =>!isFullScreen)

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <ZoomContext.Provider value={{ zoom, setZoom }}>
        <FullScreenContext.Provider value={{ isFullScreen, toggleFullScreen }}>
          <Header isCompact={isImmersiveMode} />
          <Viewport page={page} isFullScreen={isImmersiveMode} />
          <Footer isHidden={isImmersiveMode} />
        </FullScreenContext.Provider>
      </ZoomContext.Provider>
    </PageContext.Provider>
  )
}