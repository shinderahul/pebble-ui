import type { HTMLAttributes, ReactNode } from 'react';
import './Toast.scss';

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  children?: ReactNode;
  variant?: 'info' | 'success' | 'danger';
}

export const Toast = ({ title, children, variant = 'info', className = '', ...props }: ToastProps) => {
  return (
    <div className={[`pb-toast pb-toast--${variant}`, className].filter(Boolean).join(' ')} role="status" {...props}>
      {title && <div className="pb-toast__title">{title}</div>}
      {children && <div className="pb-toast__body">{children}</div>}
    </div>
  );
};
