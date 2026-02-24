import React from 'react';
import styles from './Icon.module.scss';

type Rotate = 0 | 90 | 180 | -90 | -180;

interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
  rotate?: Rotate;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '', rotate }) => {
  const rotateClass = rotate ? `rotate-${rotate}` : '';

  return (
    <svg
      className={`d-inline-block ${styles.icon} ${className} ${rotateClass}`}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};
