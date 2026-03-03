import React from 'react';
import { Product } from '@features/Products/types/products.types';
import styles from '@features/Products/components/ProductPage/ProductPage.module.scss';

interface ProductReviewsProps {
  product: Product;
  className?: string;
}

export const ProductReviews = ({ product, className }: ProductReviewsProps) => {
  console.log(product);
  return (
    <section className={`${className}`} id={'#reviews'}>
      <h2>
        Reviews <span>123</span>
      </h2>

      <article className={`${styles.review}`}>
        <header>
          <div className={`${styles.reviewRating} stars`}>*****</div>
          <strong className={`${styles.reviewAuthor}`}>John dou</strong>
          <time dateTime="2025-02-20">feb 20, 2025</time>
        </header>
        <p>Great product!</p>
      </article>
    </section>
  );
};
