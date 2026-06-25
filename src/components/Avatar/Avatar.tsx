import type { HTMLAttributes } from 'react';
import './Avatar.css';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  name?: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = ({ name, src, size = 'md', className = '', ...props }: AvatarProps) => {
  const initials = name?.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase() || 'U';

  return (
    <span className={[`pb-avatar pb-avatar--${size}`, className].filter(Boolean).join(' ')} {...props}>
      {src ? <img src={src} alt={name || ''} className="pb-avatar__image" /> : initials}
    </span>
  );
};
