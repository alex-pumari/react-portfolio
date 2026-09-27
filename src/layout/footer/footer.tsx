import type { Item } from "../../types/item.js";
import type { FC } from "react";
import { useState, useEffect } from "react";
import { useZoomContext } from "../../contexts/zoom.js";
import { Trackbar } from "../../components/trackbar/trackbar.js";
import { Panel } from "../../components/panel/panel.js";
import { FullscreenIcon } from "../../components/icons/index.js";
import { SequenceSquares } from "./sequence-squares.js";
import { DropdownButton } from "../../components/dropdown-button/dropdown-button.js";
import { IconButton } from "../../components/icon-button/icon-button.js";
import { Button } from "../../components/button/button.js";
import { DownloadIcon } from "../../components/button/button-icons.js";
import { formatTime } from "../../logic/format-time.js";
import { joinClasses } from "../../logic/join-classes.js";
import { useFullScreenContext } from "../../contexts/full-screen.js";
import cvPath from "../../assets/pdf/cv.pdf";
import "./footer.scss";

const zoomItems: Item<number, number>[] = [
  { id: 140, value: 140 },
  { id: 120, value: 120 },
  { id: 100, value: 100 },
  { id: 80, value: 80 },
  { id: 60, value: 60 },
];

export const Footer: FC = () => {
  const { zoom, setZoom } = useZoomContext();
  const { isFullScreen, toggleFullScreen } = useFullScreenContext();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <footer className={joinClasses("footer", isFullScreen && "footer--full-screen")}>
      <Panel className="footer__status-panel" screwOffset="sm">
        <span className="footer__time-display hidden-xs hidden-sm">
          {formatTime(time)}
        </span>

        <div className="footer__telemetry-display hidden-xs hidden-sm hidden-md">
          <span>CPU:</span>
          <SequenceSquares />
        </div>

        <Button
          variant="outline"
          shadow="sm"
          className="footer__cv-button"
          icon={<DownloadIcon />}
          title="Descargar CV"
          aria-label="Descargar CV"
          onClick={() => window.open(cvPath, "_blank")}
        >
          Descargar CV
        </Button>
      </Panel>
      <Panel className="footer__controls-panel" screwOffset="sm">
        <span className="footer__zoom-display hidden-xs">{zoom}%</span>

        <DropdownButton
          className="footer__dropdown-button hidden-md hidden-lg"
          variant="outline"
          items={zoomItems}
          direction="top"
          shadow="sm"
          selectedId={zoom}
          formatValue={(value) => `${value}%`}
          onSelect={(item) => setZoom(item.value)}
        >
          Zoom
        </DropdownButton>

        <Trackbar
          className="hidden-xs hidden-sm"
          min={40}
          max={120}
          value={zoom}
          onChange={setZoom}
        />

        <IconButton
          shadow="sm"
          icon={<FullscreenIcon />}
          title="Maximizar pantalla"
          aria-label="Maximizar pantalla"
          onClick={toggleFullScreen}
        ></IconButton>
      </Panel>
    </footer>
  );
};