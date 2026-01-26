import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSlide.module.scss';
import { Image } from '@shared/ui/Image/components/Image/Image';

interface HeroSlideProps {
  title: string;
  url: string;
  img: string;
}

export const HeroSlide = ({ title, url, img }: HeroSlideProps) => {
  return (
    <Link to={url} className={`${styles.slide} `}>
      <div className={`${styles.imageWrapper} d-block`}>
        <Image src={img} />
      </div>
      <div className={`${styles.content}`}>
        <h3 className={`${styles.title}`}>{title}</h3>
      </div>
    </Link>
  );
};
