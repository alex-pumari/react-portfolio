import type { FC, ReactNode } from "react";
import { useRef } from "react";
import { joinClasses } from "../../logic/join-classes.js";
import { useDraggable } from "../../hooks/use-draggable/index.js";
import "./window-card.scss";

interface WindowCardProps {
  title: string;
  children: ReactNode;
  isDraggable?: boolean;
  controls?: {
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
  };
  footerActions?: ReactNode;
  className?: string;
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
              <button 
                onClick={controls.onMinimize} 
                className={`${baseClass}__control-btn ${baseClass}__control-btn--minimize`}
                aria-label="Minimize Window"
              />
            )}
            {controls.onMaximize && (
              <button 
                onClick={controls.onMaximize} 
                className={`${baseClass}__control-btn ${baseClass}__control-btn--maximize`}
                aria-label="Maximize Window"
              />
            )}
            {controls.onClose && (
              <button 
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