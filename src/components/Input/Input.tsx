import React, { useId, type InputHTMLAttributes, type ReactNode } from 'react';
import './Input.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: ReactNode;
}

export const Input = ({ label, helperText, className = '', id, ...props }: InputProps) => {
  const inputId = id ?? useId();

  return (
    <div className="pb-input">
      {label && (
        <label className="pb-input__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input id={inputId} className={["pb-input__control", className].filter(Boolean).join(" ")} {...props} />
      {helperText && <span className="pb-input__helper">{helperText}</span>}
    </div>
  );
};
