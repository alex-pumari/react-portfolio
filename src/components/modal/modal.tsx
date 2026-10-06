import type { FC, ReactNode } from "react";
import { useRef } from "react";
import { useClickOutside } from "../../hooks/use-click-outside.js";
import { WindowCard } from "../window-card/window-card.js";
import "./modal.scss";

export interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  footerActions?: ReactNode | undefined;
  className?: string | undefined;
  closeOnBackdropClick?: boolean | undefined;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  footerActions,
  className,
  closeOnBackdropClick = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => {
    if (closeOnBackdropClick) {
      onClose();
    }
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal__backdrop">
      <div ref={modalRef} className="modal__container">
        <WindowCard
          title={title}
          controls={{ onClose }}
          footerActions={footerActions}
          className={className}
        >
          {children}
        </WindowCard>
      </div>
    </div>
  );
};
