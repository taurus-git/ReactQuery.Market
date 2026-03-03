import React from 'react';
import styles from './ProductGallery.module.scss';
import { AppSwiper } from '@shared/ui/Slider/components/AppSwiper/AppSwiper';
import { mobileConfig } from '@pages/SingleProductPage/config/slider';
import { Image } from '@shared/ui/Image/components/Image/Image';

interface ProductGalleryProps {
  images: string[];
  className?: string;
}

export const ProductGallery = ({ images, className }: ProductGalleryProps) => {
  console.log(images);

  return (
    <section className={`${className} ${styles.gallery} productGallery`}>
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
