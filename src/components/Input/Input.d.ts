import { default as React, InputHTMLAttributes, ReactNode } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: ReactNode;
}
export declare const Input: ({ label, helperText, className, id, ...props }: InputProps) => React.JSX.Element;
