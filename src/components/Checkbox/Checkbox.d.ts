import { InputHTMLAttributes, ReactNode } from 'react';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: ReactNode;
}
export declare const Checkbox: ({ label, className, ...props }: CheckboxProps) => import("react").JSX.Element;
