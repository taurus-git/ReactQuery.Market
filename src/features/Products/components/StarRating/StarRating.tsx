import React from 'react';
import styles from '@features/Products/components/ProductInfo/ProductInfo.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

interface StarRatingProps {
  rating: number;
  onChange?: (rating: number) => void;
}

export const StarRating = ({ rating, onChange }: StarRatingProps) => {
  const stars: number[] = [1, 2, 3, 4, 5];
  const roundedRating = Math.round(rating);

  return (
    <>
      {stars.map((star: number) => {
        const filled = star <= roundedRating;

        return (
          <button key={star} type="button" onClick={() => onChange?.(star)}>
            <Icon
              name={filled ? 'star_filled' : 'star_border'}
              className={`${filled ? styles.starFilled : ''}`}
            />
          </button>
        );
      })}
    </>
  );
};
