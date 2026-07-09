import { default as React, ReactNode, SelectHTMLAttributes } from 'react';
export interface SelectOption {
    value: string;
    label: string;
}
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options?: SelectOption[];
    helperText?: ReactNode;
}
export declare const Select: ({ label, options, helperText, className, id, ...props }: SelectProps) => React.JSX.Element;
