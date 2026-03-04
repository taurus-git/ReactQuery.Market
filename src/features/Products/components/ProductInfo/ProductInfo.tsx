import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductInfo.module.scss';
import { Product } from '@features/Products/types/products.types';
import { Icon } from '@shared/ui/Icon/Icon';

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

  const stars: number[] = [1, 2, 3, 4, 5];
  const roundedRating = Math.round(rating ?? 0);

  return (
    <section className={`${className}`}>
      <header>
        <p className={`${styles.sku}`}>
          <span>Артикул производителя: {sku}</span>
        </p>

        <div className={`${styles.rating} d-flex align-center`}>
          <span className={`${styles.ratingValue} d-flex align-center`}>
            {stars.map((star: number) => {
              const filled = star <= roundedRating;

              return (
                <button key={star}>
                  <Icon
                    name={filled ? 'star_filled' : 'star_border'}
                    className={`${filled ? styles.starFilled : ''}`}
                  />
                </button>
              );
            })}

            <Link to="#reviews">
              <span className={`${styles.reviewCount} position-relative`}>
                {reviews && reviews.length} отзыва
              </span>
            </Link>
          </span>
          <button className={`${styles.addToFavorite}`}>
            <Icon name={'star_round'} size={30} />
          </button>
        </div>

        <h1 className={`${styles.name}`}>{title}</h1>
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
