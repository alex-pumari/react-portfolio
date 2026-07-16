import type { FC } from "react";
import type { IconProps } from "./icon-props.js";

export const MailIcon: FC<IconProps> = (props) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <defs>
        <mask id="mail-mask">
          <rect width="16" height="16" fill="white" />

          <path d="M2 4L8 10L14 4" fill="none" stroke="black" strokeWidth="1.5" strokeLinejoin="miter" />
        </mask>
      </defs>

      <rect
        x="1.5"
        y="3.5"
        width="13"
        height="11"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        mask="url(#mail-mask)"
      />
    </svg>
  );
};