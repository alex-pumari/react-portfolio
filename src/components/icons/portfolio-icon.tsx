import type { FC } from "react";
import type { IconProps } from "./icon-props.js";

export const PortfolioIcon: FC<IconProps> = (props) => {
  return (
    <svg viewBox="0 0 16 16" shapeRendering="crispEdges" fill="currentColor" {...props}>
      <path d="M5 2h6v2h4v10H1V4h4zm1 1v1h4V3zm-4 3v2h12V6zm0 3v4h12V9z" />
    </svg>
  );
}