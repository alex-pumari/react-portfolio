import type { FC, ReactNode } from "react";
import type { Size } from "../../types/size.js";
import { joinClasses } from "../../logic/join-classes.js";
import "./panel.scss";

type OffsetSize = Size;

export interface PanelProps {
  children: ReactNode;
  screwOffset?: OffsetSize | undefined;
  hasElevation?: boolean | undefined;
  className?: string | undefined;
  onClick?: (() => void) | undefined;
}

export const Panel: FC<PanelProps> = ({
  children,
  onClick,
  className,
  screwOffset = "md",
  hasElevation = false,
}) => {
  const isClickable = !!onClick;
  const baseClass = "panel";

  return (
    <div
      className={joinClasses(
        baseClass,
        `${baseClass}--${screwOffset}`,
        (hasElevation || isClickable) && `${baseClass}--elevated`,
        isClickable && `${baseClass}--clickable`,
        className
      )}
      onClick={onClick}
    >
      {children}

      <span className={`${baseClass}__screw ${baseClass}__screw--top-left`} />
      <span className={`${baseClass}__screw ${baseClass}__screw--top-right`} />
      <span className={`${baseClass}__screw ${baseClass}__screw--bottom-left`} />
      <span className={`${baseClass}__screw ${baseClass}__screw--bottom-right`} />
    </div>
  );
};