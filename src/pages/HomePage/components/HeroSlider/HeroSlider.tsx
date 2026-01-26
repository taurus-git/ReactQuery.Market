import React from 'react';
import styles from './HeroSlider.module.scss';
import slide1 from '@assets/images/slider-image--1.jpg';
import slide2 from '@assets/images/slider-image--2.jpg';
import slide3 from '@assets/images/slider-image--3.jpg';
import slide4 from '@assets/images/slider-image--4.jpg';
import { homeHeroSliderConfig as config } from '@pages/HomePage/config/homeHeroSlider';
import { AppSwiper } from '@shared/ui/Slider/components/AppSwiper/AppSwiper';
import { HeroSlide } from '@pages/HomePage/components/HeroSlide/HeroSlide';
import { Breakout } from '@shared/layout/Breakout/components/Breakout';
import { Container } from '@shared/layout/Container/Container';
import { Breadcrumbs } from '@shared/ui/Breadcrumbs/Breadcrumbs';

export const HeroSlider = () => {
  const slidesData = [
    { id: '1', url: '/', img: slide1, title: 'one' },
    { id: '2', url: '/', img: slide2, title: 'two' },
    { id: '3', url: '/', img: slide3, title: 'three' },
    { id: '4', url: '/', img: slide4, title: 'four' },
  ];

  return (
    <div className={`${styles.sliderWrapper}`}>
      <Container>
        <Breakout>
          <div className={`${styles.slider}`}>
            <Breadcrumbs />
            <AppSwiper options={config}>
              {slidesData.map(({ url, img, title }) => (
                <HeroSlide key={url} title={title} url={url} img={img} />
              ))}
            </AppSwiper>
          </div>
        </Breakout>
      </Container>
    </div>
  );
};
