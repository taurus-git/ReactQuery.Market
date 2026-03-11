import React from 'react';
import styles from './ProductGallery.module.scss';
import { useMediaQuery } from '@shared/hooks/useMediaQuery';
import { WidthMediaQueries } from '@shared/constants/breakpoints';
import { MobileGallery } from '@features/Products/components/MobileGallery/MobileGallery';
import { DesktopGallery } from '@features/Products/components/DesktopGallery/DesktopGallery';

interface ProductGalleryProps {
  images: string[];
  className?: string;
}

export const ProductGallery = ({ images, className }: ProductGalleryProps) => {
  const isDesktop = useMediaQuery(WidthMediaQueries.md);

  return (
    <div className={`${className} ${styles.gallery}`}>
      {isDesktop ? <DesktopGallery images={images} /> : <MobileGallery images={images} />}
    </div>
  );
};
