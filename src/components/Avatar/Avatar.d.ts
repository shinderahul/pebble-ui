import { HTMLAttributes } from 'react';
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    name?: string;
    src?: string;
    size?: 'sm' | 'md' | 'lg';
}
export declare const Avatar: ({ name, src, size, className, ...props }: AvatarProps) => import("react").JSX.Element;
