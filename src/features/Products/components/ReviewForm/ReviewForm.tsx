import React, { useState } from 'react';
import styles from './ReviewForm.module.scss';
import { StarRating } from '@features/Products/components/StarRating/StarRating';

export const ReviewForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim() || rating === 0) return;

    const review = {
      text,
      rating,
    };

    //Send review
    console.log(review);

    //Clear review area
    setText('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} d-flex justify-center align-center`}>
      <div className={`${styles.textareaWrapper} w-100`}>
        <textarea
          className={`${styles.text} w-100`}
          name="review-text"
          value={text}
          placeholder="Оставить отзыв"
          rows={1}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={`${styles.stars} d-flex justify-center align-center`}>
        <StarRating rating={rating} onChange={setRating} />
      </div>
      <button type="submit" className={`${styles.submit} btn  btn--font-md btn--dark`}>
        Отправить
      </button>
    </form>
  );
};
