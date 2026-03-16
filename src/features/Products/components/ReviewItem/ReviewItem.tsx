import React from 'react';
import styles from './ReviewItem.module.scss';
import { Review } from '@features/Products/types/products.types';
import { StarRating } from '@features/Products/components/StarRating/StarRating';

interface ReviewItemProps {
  review: Review;
}

export const ReviewItem = ({ review }: ReviewItemProps) => {
  console.log(review);

  const { comment, rating, date, reviewerName } = review;
  const d = new Date(date);
  const options = { day: 'numeric', month: 'long' } as const;
  const dayMonth = new Intl.DateTimeFormat('ru-RU', options).format(d);
  const year = d.getFullYear();
  const formatted = `${dayMonth} ${year}`;

  return (
    <article className={`${styles.review}`}>
      <header>
        <div className={`${styles.reviewRating} stars`}>
          <StarRating rating={rating} />
        </div>
        <strong className={`${styles.reviewAuthor}`}>{reviewerName}</strong>
        <time dateTime={date}>{formatted}</time>
      </header>
      <p>{comment}</p>
    </article>
  );
};
