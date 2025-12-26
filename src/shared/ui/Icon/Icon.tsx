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
    fill={color}
    aria-hidden
  >
    <use xlinkHref={`/icons/sprite.svg#${name}`} />
  </svg>
);
