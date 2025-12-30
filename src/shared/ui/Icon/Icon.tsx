import React from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
}) => (
  <svg
    className={`${styles.icon} ${className}`}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color }}
    aria-hidden
  >
    <use href={`/icons/sprite.svg#${name}`} />
  </svg>
);
