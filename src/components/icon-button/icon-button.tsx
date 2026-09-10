import type { ReactElement, FC } from "react";
import type { ButtonProps } from "../button/button.js";
import type { IconProps } from "../icons/icon-props.js";
import { cloneElement } from "react";
import { Button } from "../button/button.js";
import { joinClasses } from "../../logic/join-classes.js";
import "./icon-button.scss";

interface IconButtonProps extends Omit<ButtonProps, "variant"> {
  icon: ReactElement<IconProps>;
  title: string
}

export const IconButton: FC<IconButtonProps> = ({ className, title, icon, ...props }) => {
  const styledIcon = cloneElement(icon, {
    className: joinClasses("icon-button__icon", icon.props.className),
  });

  return (
    <Button
      {...props}
      icon={styledIcon}
      title={title}
      variant="outline"
      className={joinClasses("icon-button", className)}
    ></Button>
  );
};