import type { FC } from "react";
import type { IconProps } from "./icon-props.js";

export const MailIcon: FC<IconProps> = (props) => {
  return (
    <svg viewBox="0 0 16 16" shapeRendering="crispEdges" {...props}>
      <g fill="currentColor">
        <rect x="1" y="3" width="14" height="1" />
        <rect x="1" y="4" width="1" height="9" />
        <rect x="14" y="4" width="1" height="9" />
        <rect x="1" y="13" width="14" height="1" />
        <rect x="2" y="4" width="1" height="1" />
        <rect x="3" y="5" width="1" height="1" />
        <rect x="4" y="6" width="1" height="1" />
        <rect x="5" y="7" width="1" height="1" />
        <rect x="6" y="8" width="1" height="1" />
        <rect x="7" y="9" width="2" height="1" />
        <rect x="9" y="8" width="1" height="1" />
        <rect x="10" y="7" width="1" height="1" />
        <rect x="11" y="6" width="1" height="1" />
        <rect x="12" y="5" width="1" height="1" />
        <rect x="13" y="4" width="1" height="1" />
      </g>
    </svg>
  );
}