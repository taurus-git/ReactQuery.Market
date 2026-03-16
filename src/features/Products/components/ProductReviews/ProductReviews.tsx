import React from 'react';
//import styles from '@features/Products/components/ProductPage/ProductPage.module.scss';
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
    <section id="reviews" className={`${className}`}>
      <h2>
        Отзывы о товаре <span>{reviews.length}</span>
      </h2>

      {rating && (
        <>
          <p>Средняя оценка</p>
          <div>{rating.toFixed(1)}</div>
          <StarRating rating={rating} />
        </>
      )}

      <div>
        <ReviewForm />
      </div>

      {reviews.map((r) => (
        <ReviewItem review={r} />
      ))}
    </section>
  );
};
