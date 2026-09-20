import type { FC } from "react";
import { IconButton } from "../icon-button/icon-button.js";
import { joinClasses } from "../../logic/join-classes.js";
import "./trackbar.scss";

export interface TrackbarProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  onChange: (value: number) => void;
}

export const Trackbar: FC<TrackbarProps> = ({
  value,
  min = 50,
  max = 200,
  step = 10,
  className,
  onChange,
}) => {
  const handleDecrease = () => {
    onChange(Math.max(min, value - step));
  };

  const handleIncrease = () => {
    onChange(Math.min(max, value + step));
  };

  return (
    <div className={joinClasses("trackbar", className)}>      
      <div className="trackbar__control">
        <IconButton
          shadow="sm"
          icon={<span>-</span>}
          onClick={handleDecrease}
          disabled={value <= min}
          aria-label="Disminuir"
          title="Disminuir"
        ></IconButton>
        
        <div className="trackbar__slider-wrapper">
          <input
            type="range"
            className="trackbar__input"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
          />
          
          <div className="trackbar__ticks">
            <span className="trackbar__tick"></span>
            <span className="trackbar__tick"></span>
            <span className="trackbar__tick"></span>
            <span className="trackbar__tick"></span>
            <span className="trackbar__tick"></span>
          </div>
        </div>

        <IconButton
          shadow="sm"
          icon={<span>+</span>}
          onClick={handleIncrease}
          disabled={value >= max}
          aria-label="Aumentar"
          title="Aumentar"
        ></IconButton>
      </div>
    </div>
  );
};