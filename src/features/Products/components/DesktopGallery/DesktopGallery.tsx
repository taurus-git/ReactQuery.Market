import React, { useState } from 'react';
import styles from './DesktopGallery.module.scss';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { desktopMainConfig, desktopThumbsConfig } from '@pages/SingleProductPage/config/slider';
import { Image } from '@shared/ui/Image/components/Image/Image';

interface MobileGalleryProps {
  images: string[];
  className?: string;
}

export const DesktopGallery = ({ images, className }: MobileGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className={`${className} ${styles.gallery} w-100 productDesktopGallery`}>
      {/*Thumbs*/}
      <Swiper
        {...desktopThumbsConfig}
        onSwiper={setThumbsSwiper}
        className={`${styles.thumbs} w-100 productDesktopThumbs`}
      >
        {images.map((i) => (
          <SwiperSlide key={i} className={`${styles.thumbsSlide}`}>
            <Image src={i} alt="Product thumbnail" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/*Main*/}
      <Swiper
        {...desktopMainConfig}
        thumbs={{ swiper: thumbsSwiper }}
        className={`${styles.slider} w-100`}
      >
        {images.map((i) => (
          <SwiperSlide key={i} className={`${styles.mainSlide} d-flex justify-center align-center`}>
            <Image src={i} alt="Product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
