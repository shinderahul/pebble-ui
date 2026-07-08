import type { HTMLAttributes } from 'react';
import './Badge.scss';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'primary' | 'success' | 'danger';
}

export const Badge = ({ variant = 'neutral', className = '', ...props }: BadgeProps) => {
  return <span className={[`pb-badge pb-badge--${variant}`, className].filter(Boolean).join(' ')} {...props} />;
};
