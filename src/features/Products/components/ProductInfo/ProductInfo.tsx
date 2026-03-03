import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@features/Products/components/ProductPage/ProductPage.module.scss';
import { Product } from '@features/Products/types/products.types';

interface ProductInfoProps {
  product: Product;
  className?: string;
}

export const ProductInfo = ({ product, className }: ProductInfoProps) => {
  const { dimensions, discountPercentage, id, images, price, rating, reviews, sku, title, weight } =
    product;
  console.log(
    dimensions,
    discountPercentage,
    id,
    images,
    price,
    rating,
    reviews,
    sku,
    title,
    weight,
  );
  return (
    <section className={`${className}`}>
      <header>
        <p className={`${styles.sku}`}>
          <span>{sku}</span>
        </p>
        <h1 className={`${styles.name}`}>{title}</h1>

        <div className={`${styles.rating}`}>
          <span className={`${styles.ratingValue}`}>{`rating`}</span>
          <Link to="#reviews">
            <span className={`${styles.reviewCount}`}>{`reviews`}</span>
          </Link>
        </div>
      </header>

      <section className={`${styles.pricing}`}>
        <p>
          <span className={`${styles.discount}`}>{`discountPercentage`}</span>
        </p>
        <p>
          <del className={`${styles.oldPrice}`}>123</del>
          <span className={`${styles.price}`}></span>
        </p>
      </section>

      <section className={`${styles.purchaseActions}`}>
        <button className={`${styles.addToCart}`}>Add to Cart</button>
        <button className={`${styles.store}`}>Pickup in Store</button>
      </section>
    </section>
  );
};
