import type { SwiperOptions } from 'swiper/types';
import { Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules';

export const mobileConfig: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  modules: [Pagination],
  pagination: {
    clickable: true,
  },
};

export const desktopMainConfig: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  modules: [Navigation, Thumbs],
  navigation: true,
  watchSlidesProgress: true,
};

export const desktopThumbsConfig: SwiperOptions = {
  slidesPerView: 4,
  direction: 'vertical',
  spaceBetween: 10,
  watchSlidesProgress: true,
  modules: [Thumbs, FreeMode],
};
