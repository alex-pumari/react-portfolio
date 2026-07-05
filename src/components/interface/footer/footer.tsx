import { useEffect } from "react"
import type { Page, ZoomValue } from "../../../types/index.js"
import { Button, Stepper, Trackbar, MenuButton } from "../index.js"
import { joinClasses, setElementZoom } from "../../../logic/index.js"
import { useFullScreenContext, usePageContext, useZoomContext } from "../../../contexts/index.js"
import { SlideIcon } from "../../icons/index.js"
import { ZOOM_VALUES } from "../../../config/constants.js"
import "./footer.scss"

interface FooterProps {
  isHidden?: boolean
}

function renderItem<ItemType> (item: ItemType): string {
  return `${item} %`
}

export function Footer({ isHidden = false }: FooterProps) {
  const { page, setPage } = usePageContext()
  const { zoom, setZoom } = useZoomContext()
  const { toggleFullScreen } = useFullScreenContext()

  useEffect(() => {
    const viewport = document.querySelector<HTMLElement>("#viewport")

    if(viewport) setElementZoom(viewport, zoom)
  }, [zoom])

  return (
    <footer className={joinClasses("footer", isHidden && "footer--hidden")}>
      <Stepper
        label={`Página ${page} de 4`}
        value={page}
        min={1}
        max={4}
        onChange={newPage => setPage(newPage as Page)}
        infinite
      />
      <div className="footer__controls-group">
        <MenuButton
          items={ZOOM_VALUES}
          label={renderItem(zoom)}
          onChange={zoomValue => setZoom(zoomValue)}
          renderItem={renderItem}
          direction="top"
        />
        <Trackbar
          value={zoom}
          min={60}
          max={140}
          step={20}
          onChange={newValue => setZoom(newValue as ZoomValue)}
        />
        <Button size="sm" onClick={toggleFullScreen}>
          <SlideIcon />
        </Button>
      </div>
    </footer>
  )
}
