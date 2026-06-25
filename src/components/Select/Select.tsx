import React, { useId, type ReactNode, type SelectHTMLAttributes } from 'react';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: SelectOption[];
  helperText?: ReactNode;
}

export const Select = ({ label, options = [], helperText, className = '', id, ...props }: SelectProps) => {
  const selectId = id ?? useId();

  return (
    <div className="pb-select">
      {label && (
        <label className="pb-select__label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <select id={selectId} className={["pb-select__control", className].filter(Boolean).join(" ")} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && <p className="pb-select__helper">{helperText}</p>}
    </div>
  );
};
