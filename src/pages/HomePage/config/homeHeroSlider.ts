import type { SwiperOptions } from 'swiper/types';

export const homeHeroSliderConfig: SwiperOptions = {
  slidesPerView: 1.05,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 25 },
  },
};
