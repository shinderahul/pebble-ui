import { HTMLAttributes } from 'react';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'neutral' | 'primary' | 'success' | 'danger';
}
export declare const Badge: ({ variant, className, ...props }: BadgeProps) => import("react").JSX.Element;
