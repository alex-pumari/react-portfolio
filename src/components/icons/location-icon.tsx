import type { FC } from "react";
import type { IconProps } from "./icon-props.js";

export const LocationIcon: FC<IconProps> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 1a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  );
};
