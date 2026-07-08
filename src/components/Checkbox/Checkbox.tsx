import type { InputHTMLAttributes, ReactNode } from 'react';
import './Checkbox.scss';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
}

export const Checkbox = ({ label, className = '', ...props }: CheckboxProps) => {
  return (
    <label className="pb-checkbox">
      <input type="checkbox" className={["pb-checkbox__input", className].filter(Boolean).join(" ")} {...props} />
      {label && <span className="pb-checkbox__label">{label}</span>}
    </label>
  );
};
