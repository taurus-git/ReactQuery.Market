import React from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => (
  <svg
    className={`d-inline-block ${styles.icon} ${className}`}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    aria-hidden
  >
    <use href={`/icons/sprite.svg#${name}`} />
  </svg>
);
