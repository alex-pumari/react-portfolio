import type { FC } from "react";
import type{ IconProps } from "./icon-props.js";

export const HomeIcon: FC<IconProps> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M7 1h2v1h1v1h1v1h1v1h1v1h1v2h-1v7H9v-4H7v4H3V8H2V6h1V5h1V4h1V3h1V2h1z"/>
    </svg>
  );
}
