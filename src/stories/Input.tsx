import React from 'react'
import './Input.css'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?:     string
  hint?:      string
  error?:     string
  leftIcon?:  React.ReactNode
  rightIcon?: React.ReactNode
  inputSize?: 'sm' | 'md' | 'lg'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, hint, error, leftIcon, rightIcon,
      inputSize = 'md', id, className, ...props },
    ref
  ) => {
    const uid     = id ?? React.useId()
    const hintId  = hint  ? uid + '-hint'  : undefined
    const errorId = error ? uid + '-error' : undefined

    const wrapCls = [
      'wrap',
      `wrap--${inputSize}`,
      leftIcon  ? 'hasLeft'  : '',
      rightIcon ? 'hasRight' : '',
      error     ? 'hasError' : '',
    ].filter(Boolean).join(' ')

    return (
      <div className="root">
        {label && <label htmlFor={uid} className="label">{label}</label>}
        <div className={wrapCls}>
          {leftIcon  && <span className="iconL" aria-hidden="true">{leftIcon}</span>}
          <input
            ref={ref} id={uid}
            className={[ 'input', className ].filter(Boolean).join(' ')}
            aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
            aria-invalid={error ? true : undefined}
            {...props}
          />
          {rightIcon && <span className="iconR" aria-hidden="true">{rightIcon}</span>}
        </div>
        {hint && !error && <p id={hintId} className="hint">{hint}</p>}
        {error && <p id={errorId} className="error" role="alert">{error}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'