import { useState, type FC } from "react";
import { Trackbar } from "../../components/trackbar/trackbar.js";
import { FullscreenIcon } from "../../components/icons/index.js";
import { GaussPlot } from "./gauss-plot.js";
import "./footer.scss";

export const Footer: FC = () => {
  const [zoom, setZoom] = useState(50);

  return (
    <footer className="footer">
      <section className="footer__status-section">
        <span className="footer__time-display">
          00:00:00 AM
        </span>

        <div className="footer__telemetry-display">
          <span>CPU:</span>
          <GaussPlot />
        </div>
      </section>
      
      <section className="footer__controls-section">
        <Trackbar
          min={10}
          max={100}
          value={zoom}
          onChange={setZoom}
        />
        
        <button className="footer__btn" aria-label="Fullscreen">
          <FullscreenIcon className="footer__btn-icon" />
        </button>
      </section>
    </footer>
  );
};
