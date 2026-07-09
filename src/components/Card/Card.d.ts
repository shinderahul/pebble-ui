import { HTMLAttributes, ReactNode } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export declare const Card: ({ children, className, ...props }: CardProps) => import("react").JSX.Element;
