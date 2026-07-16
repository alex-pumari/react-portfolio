import type { FC } from "react";
import "./trackbar.scss";

export interface TrackbarProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
}

export const Trackbar: FC<TrackbarProps> = ({
  value,
  min = 50,
  max = 200,
  step = 10,
  onChange,
}) => {
  const handleDecrease = () => {
    onChange(Math.max(min, value - step));
  };

  const handleIncrease = () => {
    onChange(Math.min(max, value + step));
  };

  return (
    <div className="trackbar">
      <span className="trackbar__value-display">{value}%</span>
      
      <div className="trackbar__control">
        <button 
          className="trackbar__btn" 
          onClick={handleDecrease}
          disabled={value <= min}
          aria-label="Disminuir"
          title="Disminuir"
        >
          -
        </button>
        
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

        <button 
          className="trackbar__btn" 
          onClick={handleIncrease}
          disabled={value >= max}
          aria-label="Aumentar"
          title="Aumentar"
        >
          +
        </button>
      </div>
    </div>
  );
};