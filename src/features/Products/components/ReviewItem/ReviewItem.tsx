import React from 'react';
import styles from './ReviewItem.module.scss';
import { Review } from '@features/Products/types/products.types';
import { StarRating } from '@features/Products/components/StarRating/StarRating';

interface ReviewItemProps {
  review: Review;
}

export const ReviewItem = ({ review }: ReviewItemProps) => {
  const { comment, rating, date, reviewerName } = review;
  const d = new Date(date);
  const options = { day: 'numeric', month: 'long' } as const;
  const dayMonth = new Intl.DateTimeFormat('ru-RU', options).format(d);
  const year = d.getFullYear();
  const formatted = `${dayMonth} ${year}`;

  return (
    <article className={`${styles.review}`}>
      <div className={`${styles.rating} d-flex`}>
        <StarRating rating={rating} />
      </div>
      <time className={`${styles.date}`} dateTime={date}>
        {formatted}
      </time>
      <p className={`${styles.author}`}>{reviewerName}</p>
      <p className={`${styles.text}`}>{comment}</p>
    </article>
  );
};
