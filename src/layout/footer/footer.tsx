import type { FC } from "react";
import { useState, useEffect } from "react";
import { useZoomContext } from "../../contexts/zoom.js";
import { Trackbar } from "../../components/trackbar/trackbar.js";
import { Panel } from "../../components/panel/panel.js";
import { FullscreenIcon } from "../../components/icons/index.js";
import { GaussPlot } from "./gauss-plot.js";
import { IconButton } from "../../components/icon-button/icon-button.js";
import { DownloadIcon } from "../../components/button/button-icons.js";
import { formatTime } from "../../logic/format-time.js";
import { joinClasses } from "../../logic/join-classes.js";
import { useFullScreenContext } from "../../contexts/full-screen.js";
import cvPath from "../../assets/pdf/cv.pdf";
import "./footer.scss";

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
        <span className="footer__time-display">
          {formatTime(time)}
        </span>

        <div className="footer__telemetry-display">
          <span>CPU:</span>
          <GaussPlot />
        </div>

        <IconButton
          icon={<DownloadIcon />}
          title="Descargar CV"
          aria-label="Descargar CV"
          onClick={() => window.open(cvPath, "_blank")}
        ></IconButton>
      </Panel>
      <Panel className="footer__controls-panel" screwOffset="sm">
        <span className="footer__zoom-display">{zoom}%</span>

        <Trackbar
          className="hidden-sm"
          min={40}
          max={120}
          value={zoom}
          onChange={setZoom}
        />

        <IconButton
          icon={<FullscreenIcon />}
          title="Maximizar pantalla"
          aria-label="Maximizar pantalla"
          onClick={toggleFullScreen}
        ></IconButton>
      </Panel>
    </footer>
  );
};