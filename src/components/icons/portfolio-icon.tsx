import type { FC } from "react";
import type { IconProps } from "./icon-props.js";

export const PortfolioIcon: FC<IconProps> = (props) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <g id="handle">
        <line x1="5" y1="5" x2="5" y2="3" />
        <line x1="11" y1="5" x2="11" y2="3" />
        <line x1="4.5" y1="2" x2="11.5" y2="2" strokeWidth="2" />
      </g>

      <g id="body">
        <mask id="cut-line">
          <rect width="16" height="16" fill="white" />
          <line x1="1.5" y1="9.25" x2="14.5" y2="9.25" stroke="black" strokeWidth="1.5" />
        </mask>

        <rect
          x="1.5"
          y="5"
          width="13"
          height="8.5"
          fill="currentColor"
          mask="url(#cut-line)"
        />
      </g>
    </svg>
  );
}