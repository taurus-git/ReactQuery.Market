import React from 'react';
import styles from './Image.module.scss';
import { srcSetItem } from '@shared/ui/Image/types/image.types';
import { useImage } from '@shared/ui/Image/hooks/useImage';

export interface ImageProps {
  src: string;
  srcset?: srcSetItem[];
  alt?: string;
  lazy?: boolean;
  className?: string;
}

export const Image = ({
  src,
  srcset,
  alt,
  lazy = true,
  className = `d-block ${styles.image}`,
}: ImageProps) => {
  const { getSrcset, getImageAlt } = useImage();
  return (
    <picture>
      {getSrcset(srcset)}
      <img
        src={src}
        className={className}
        alt={getImageAlt(src, alt)}
        loading={lazy ? 'lazy' : undefined}
      />
    </picture>
  );
};
