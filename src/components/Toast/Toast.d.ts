import { HTMLAttributes, ReactNode } from 'react';
export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: ReactNode;
    children?: ReactNode;
    variant?: 'info' | 'success' | 'danger';
}
export declare const Toast: ({ title, children, variant, className, ...props }: ToastProps) => import("react").JSX.Element;
