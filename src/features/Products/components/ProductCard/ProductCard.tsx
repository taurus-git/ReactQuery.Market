import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { Product } from '@features/Products/types/products.types';
import { Image } from '@shared/ui/Image/components/Image/Image';
import { srcSetItem } from '@shared/ui/Image/types/image.types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { title, price, discountPercentage, images, thumbnail, description } = product;

  const mainImage = images[0] || thumbnail;

  const srcset: srcSetItem[] = [
    {
      src: mainImage,
      media: '(min-width: 768px)',
    },
  ];

  const oldPrice = discountPercentage ? (price / (1 - discountPercentage / 100)).toFixed(2) : null;

  return (
    <article className={`${styles.productCard} w-100`}>
      <Link to={`/products/${product.id}`}>
        <div className={`${styles.imageWrapper}`}>
          <Image src={thumbnail} srcset={srcset} alt={title} />

          {discountPercentage && (
            <div className={`${styles.discount}`}>
              <span className={`${styles.discountPercentage}`}>{`-${discountPercentage}%`}</span>
              <span className={`${styles.discountText}`}>Только на сайте</span>
            </div>
          )}
        </div>

        <div className={`${styles.content}`}>
          <h3 className={`${styles.title} text-ellipsis`}>{title}</h3>

          <p className={`${styles.description} text-ellipsis`}>{description}</p>

          <div className={`${styles.priceBlock} d-flex`}>
            {oldPrice && (
              <data value={oldPrice} className={`${styles.oldPrice}`}>
                {oldPrice}
                <span className={`${styles.currency}`}>₽</span>
              </data>
            )}

            <data value={price} className={`${styles.price}`}>
              {price}
              <span className={`${styles.currency}`}>₽</span>
            </data>
          </div>
        </div>
      </Link>
    </article>
  );
};
