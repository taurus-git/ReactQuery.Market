import React from 'react';
import styles from './ProductReviews.module.scss';
import { StarRating } from '@features/Products/components/StarRating/StarRating';
import { ReviewForm } from '@features/Products/components/ReviewForm/ReviewForm';
import { ReviewItem } from '@features/Products/components/ReviewItem/ReviewItem';
import { Review } from '@features/Products/types/products.types';

interface ProductReviewsProps {
  reviews: Review[];
  rating?: number;
  className?: string;
}

export const ProductReviews = ({ reviews, rating, className }: ProductReviewsProps) => {
  return (
    <section id="reviews" className={`${className} ${styles.reviewsWrapper}`}>
      <div className={`${styles.title}`}>
        <h2 className={`${styles.heading}`}>
          Отзывы о товаре
          <span className={`${styles.reviewsCount}`}>{reviews.length}</span>
        </h2>
      </div>

      {rating && (
        <div className={`${styles.rating}`}>
          <p className={`${styles.ratingText}`}>Средняя оценка</p>
          <div className={`${styles.ratingValue}`}>{rating.toFixed(1)}</div>
          <StarRating rating={rating} />
        </div>
      )}

      <div className={`${styles.form}`}>
        <ReviewForm />
      </div>

      <div className={`${styles.reviews}`}>
        {reviews.map((r) => (
          <ReviewItem review={r} />
        ))}
      </div>
    </section>
  );
};
