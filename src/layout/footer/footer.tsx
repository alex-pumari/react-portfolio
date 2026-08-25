import type { FC } from "react";
import { useState, useEffect } from "react";
import { useZoomContext } from "../../contexts/zoom.js";
import { Trackbar } from "../../components/trackbar/trackbar.js";
import { Panel } from "../../components/panel/panel.js";
import { FullscreenIcon } from "../../components/icons/index.js";
import { GaussPlot } from "./gauss-plot.js";
import { IconButton } from "../../components/icon-button/icon-button.js";
import { formatTime } from "../../logic/format-time.js";
import "./footer.scss";

export const Footer: FC = () => {
  const { zoom, setZoom } = useZoomContext();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <Panel className="footer__status-panel" screwOffset="sm">
        <span className="footer__time-display">
          {formatTime(time)}
        </span>

        <div className="footer__telemetry-display">
          <span>CPU:</span>
          <GaussPlot />
        </div>
      </Panel>
      <Panel className="footer__controls-panel" screwOffset="sm">
        <Trackbar
          min={10}
          max={100}
          value={zoom}
          onChange={setZoom}
        />

        <IconButton
          icon={<FullscreenIcon />}
          title="Pantalla completa"
          aria-label="Pantalla completa"
        ></IconButton>
      </Panel>
    </footer>
  );
};