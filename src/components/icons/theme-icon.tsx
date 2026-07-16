import type { FC } from "react";
import type{ IconProps } from "./icon-props.js";

export const ThemeIcon: FC<IconProps> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 1.5v13a6.5 6.5 0 100-13z" clipRule="evenodd"/>
    </svg>
  );
}
