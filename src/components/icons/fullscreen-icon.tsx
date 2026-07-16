import type { FC } from "react";
import type{ IconProps } from "./icon-props.js";

export const FullscreenIcon: FC<IconProps> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M3 3H8V5.5H5.5V8H3V3ZM12 3H17V8H14.5V5.5H12V3ZM17 12V17H12V14.5H14.5V12H17ZM3 12H5.5V14.5H8V17H3V12Z"
      />
    </svg>
  );
}
