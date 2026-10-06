import type { FC, ReactNode } from "react";
import { useRef } from "react";
import { joinClasses } from "../../logic/join-classes.js";
import { useDraggable } from "../../hooks/use-draggable/index.js";
import { Button } from "../button/button.js";
import "./window-card.scss";

interface WindowCardProps {
  title: string;
  children: ReactNode;
  isDraggable?: boolean;
  controls?: {
    onClose?: (() => void) | undefined;
    onMinimize?: (() => void) | undefined;
    onMaximize?: (() => void) | undefined;
  };
  footerActions?: ReactNode;
  className?: string | undefined;
}

export const WindowCard: FC<WindowCardProps> = ({
  title,
  children,
  controls,
  footerActions,
  className,
  isDraggable = false,
}) => {
  const baseClass = "window-card";
  const windowCardRef = useRef<HTMLElement | null>(null);
  const windowCardHeaderRef = useRef<HTMLElement | null>(null);

  useDraggable({
    handle: windowCardHeaderRef,
    target: windowCardRef,
  },
  {
    isTouchDevice: false,
    enabled: isDraggable,
  });

  return (
    <section ref={windowCardRef} className={joinClasses(baseClass, className)}>
      <header ref={windowCardHeaderRef} className={joinClasses(`${baseClass}__header`, isDraggable && `${baseClass}__header--draggable`)}>
        <span className={`${baseClass}__title`}>{title}</span>
        
        {controls && (
          <div className={`${baseClass}__controls`}>
            {controls.onMinimize && (
              <Button
                onClick={controls.onMinimize} 
                className={`${baseClass}__control-btn ${baseClass}__control-btn--minimize`}
                aria-label="Minimize Window"
              />
            )}
            {controls.onMaximize && (
              <Button
                onClick={controls.onMaximize} 
                className={`${baseClass}__control-btn ${baseClass}__control-btn--maximize`}
                aria-label="Maximize Window"
              />
            )}
            {controls.onClose && (
              <Button
                variant="ghost"
                onClick={controls.onClose} 
                className={`${baseClass}__control-btn ${baseClass}__control-btn--close`}
                aria-label="Close Window"
              />
            )}
          </div>
        )}

        {isDraggable && (
          <span>□ ■</span>
        )}
      </header>

      <div className={`${baseClass}__content`}>
        {children}
      </div>

      {footerActions && (
        <footer className={`${baseClass}__footer`}>
          {footerActions}
        </footer>
      )}
    </section>
  );
};