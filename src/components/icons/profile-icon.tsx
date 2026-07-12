import type { FC } from "react";
import type { IconProps } from "./icon-props.js";

export const ProfileIcon: FC<IconProps> = (props) => {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M6 2h4v1h1v4h-1v1H6V7H5V3h1zm-2 8h8v1h1v4H3v-4h1z" />
    </svg>
  );
}