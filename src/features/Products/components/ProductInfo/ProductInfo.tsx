import React from 'react';
import styles from './ProductInfo.module.scss';
import { Product } from '@features/Products/types/products.types';
import { Icon } from '@shared/ui/Icon/Icon';
import { buildPrice } from '@features/Products/utils/productUtils';
import { StarRating } from '@features/Products/components/StarRating/StarRating';

interface ProductInfoProps {
  product: Product;
  className?: string;
}

export const ProductInfo = ({ product, className }: ProductInfoProps) => {
  const { discountPercentage, price, rating, reviews, sku, title } = product;
  const pricing = buildPrice(price, discountPercentage);

  return (
    <section className={`${className} ${styles.info}`}>
      <header>
        <p className={`${styles.sku}`}>
          <span>Артикул производителя: {sku}</span>
        </p>

        <div className={`${styles.rating} d-flex align-center`}>
          <span className={`${styles.ratingValue} d-flex align-center`}>
            {rating && <StarRating rating={rating} />}
            <a href="#reviews">
              <span className={`${styles.reviewCount} position-relative`}>
                {reviews && reviews.length} отзыва
              </span>
            </a>
          </span>
          <button className={`${styles.addToFavorite}`}>
            <Icon name={'star_round'} size={30} />
          </button>
        </div>

        <h1 className={`${styles.title}`}>{title}</h1>
      </header>

      <section className={`${styles.pricing} d-flex align-center flex-wrap`}>
        {discountPercentage && (
          <span
            className={`${styles.discount} d-flex justify-center align-center`}
          >{`-${pricing.discount}%`}</span>
        )}
        <data
          value={price}
          className={`${styles.price} ${discountPercentage ? styles.priceAccent : ''}`}
        >
          {pricing.current} <span className={`${styles.currency}`}>₽</span>
        </data>
        {discountPercentage && (
          <>
            <span className={`${styles.oldPrice} ${styles.oldPriceDesktop}`}>
              {pricing.old}
              <span className={`${styles.currency}`}>₽</span>
            </span>
          </>
        )}
        <div className={`${styles.pricingAdditional} d-flex flex-column`}>
          {discountPercentage && (
            <>
              <span className={`${styles.oldPrice} ${styles.oldPriceMobile}`}>
                {pricing.old}
                <span className={`${styles.currency}`}>₽</span>
              </span>
            </>
          )}
          <button className={`${styles.isLowerPrice} position-relative`}>Нашли дешевле?</button>
        </div>
      </section>

      <section className={`${styles.purchaseActions}`}>
        <button className={`btn btn--font-md btn--cta-dark ${styles.addToCart}`}>
          Добавить в корзину
        </button>
        <button className={`btn btn--font-md btn--cta-light ${styles.getInStore}`}>
          Забрать в магазине
        </button>
      </section>
    </section>
  );
};
