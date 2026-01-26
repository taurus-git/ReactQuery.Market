import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AppSwiperProps {
  children: ReactNode[];
  options: SwiperOptions;
  className?: string;
}

export const AppSwiper = ({ children, options, className }: AppSwiperProps) => {
  return (
    <Swiper className={className} {...options}>
      {children.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
