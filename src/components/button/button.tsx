import type { ButtonHTMLAttributes, ReactNode, FC } from "react";
import type { Size } from "../../types/size.js";
import { joinClasses } from "../../logic/join-classes.js";
import "./button.scss";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "success" | "danger" | "soft";
export type ButtonSize = Size;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  icon,
  className,
  ...props
}) => {
  const baseClass = "pixel-button";
  const modifierClasses = [
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    loading && `${baseClass}--loading`,
  ];

  return (
    <button
      className={joinClasses(baseClass, modifierClasses, className)}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <span className={`${baseClass}__loader`} aria-hidden="true">■ </span>}
      {!loading && icon && <span className={`${baseClass}__icon`}>{icon}</span>}
      {!!children && <span className={`${baseClass}__label`}>{children}</span>}
    </button>
  );
};