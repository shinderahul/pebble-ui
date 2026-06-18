export interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    onClick?: () => void;
}
export declare const Button: ({ label, variant, disabled, onClick, }: ButtonProps) => import("react").JSX.Element;
