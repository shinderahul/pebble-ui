import './Button.scss';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`mcl-btn mcl-btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};