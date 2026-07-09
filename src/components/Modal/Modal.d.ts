import { HTMLAttributes, ReactNode } from 'react';
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    open?: boolean;
    title?: ReactNode;
    children: ReactNode;
}
export declare const Modal: ({ open, title, children, className, ...props }: ModalProps) => import("react").JSX.Element | null;
