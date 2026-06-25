import type { HTMLAttributes, ReactNode } from 'react';
import './Modal.css';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  open?: boolean;
  title?: ReactNode;
  children: ReactNode;
}

export const Modal = ({ open = false, title, children, className = '', ...props }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="pb-modal-backdrop">
      <div className={["pb-modal", className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" {...props}>
        {title && <div className="pb-modal__title">{title}</div>}
        <div className="pb-modal__body">{children}</div>
      </div>
    </div>
  );
};
