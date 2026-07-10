import type { FC, ReactNode } from "react";
import { joinClasses } from "../../logic/join-classes.js";
import "./window-card.scss";

interface WindowCardProps {
  title: string;
  children: ReactNode;
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
}) => {
  const baseClass = "window-card";

  return (
    <section className={joinClasses(baseClass, className)}>
      <header className={`${baseClass}__header`}>
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