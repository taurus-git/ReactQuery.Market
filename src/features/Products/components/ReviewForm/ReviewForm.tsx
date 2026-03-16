import React, { useState } from 'react';
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
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <StarRating rating={rating} onChange={setRating} />
      <button type="submit" className={'btn btn--size-md btn--font-md btn--dark'}>
        Отправить
      </button>
    </form>
  );
};
