import { useState, type FC } from "react";
import { Trackbar } from "../components/trackbar/trackbar.js";
import { FullscreenIcon } from "../components/icons/index.js";
import "./footer.scss";

export const Footer: FC = () => {
  const [zoom, setZoom] = useState(50);

  return (
    <footer className="footer">
      <div className="footer__meta">
        <span className="footer__status">
          <span className="footer__status-led" aria-hidden="true" />
          ACTIVO
        </span>

        <div className="footer__telemetry-display">
          <span>CPU:</span>
          <GaussPlot />
        </div>
      </div>
      
      <div className="footer__controls">
        <Trackbar
          min={10}
          max={100}
          value={zoom}
          onChange={setZoom}
        />
        
        <button className="footer__btn" aria-label="Fullscreen">
          <FullscreenIcon className="footer__btn-icon" />
        </button>
      </div>
    </footer>
  );
};
