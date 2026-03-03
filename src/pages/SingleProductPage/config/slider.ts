import type { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';

export const mobileConfig: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  modules: [Pagination],
  pagination: {
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 25 },
  },
};

export const desktopConfig: SwiperOptions = {
  slidesPerView: 1.05,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 25 },
  },
};
