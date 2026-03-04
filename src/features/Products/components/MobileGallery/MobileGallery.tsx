import React from 'react';
import styles from './MobileGallery.module.scss';
import { mobileConfig } from '@pages/SingleProductPage/config/slider';
import { AppSwiper } from '@shared/ui/Slider/components/AppSwiper/AppSwiper';
import { Image } from '@shared/ui/Image/components/Image/Image';

interface MobileGalleryProps {
  images: string[];
  className?: string;
}

export const MobileGallery = ({ images, className }: MobileGalleryProps) => {
  return (
    <section className={`${className} ${styles.gallery} productMobileGallery`}>
      <AppSwiper options={mobileConfig} className={`${styles.swiperGallery}`}>
        {images.map((i) => (
          <div key={i} className={`${styles.imageWrapper}`}>
            <Image src={i} />
          </div>
        ))}
      </AppSwiper>
    </section>
  );
};
