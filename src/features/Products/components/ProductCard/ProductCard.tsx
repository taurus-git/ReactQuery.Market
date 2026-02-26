import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { Product } from '@features/Products/types/products.types';
import { Image } from '@shared/ui/Image/components/Image/Image';
import { srcSetItem } from '@shared/ui/Image/types/image.types';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';
import { fetchSingleProduct } from '@features/Products/api/productsApi';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, price, discountPercentage, images, thumbnail, description } = product;
  const queryClient = useQueryClient();

  const mainImage = images[0] || thumbnail;

  const srcset: srcSetItem[] = [
    {
      src: mainImage,
      media: '(min-width: 768px)',
    },
  ];

  const oldPrice = discountPercentage ? (price / (1 - discountPercentage / 100)).toFixed(2) : null;
  const discount = discountPercentage ? Math.round(discountPercentage) : null;

  const handleMouseEnter = () => {
    queryClient.prefetchQuery({
      queryKey: [QUERY_DOMAINS.products, id],
      queryFn: () => fetchSingleProduct(id),
      staleTime: 10 * 1000,
    });
  };

  return (
    <article className={`${styles.productCard} w-100`}>
      <Link to={`/products/${id}`} onMouseEnter={handleMouseEnter}>
        <div className={`${styles.imageWrapper} position-relative`}>
          <Image src={thumbnail} srcset={srcset} alt={title} />

          {discount && (
            <div className={`${styles.discount} position-absolute d-flex w-100`}>
              <span
                className={`${styles.discountPercentage} d-flex justify-center align-center`}
              >{`-${discount}%`}</span>
              <span className={`${styles.discountText} d-flex justify-center align-center`}>
                Только на сайте
              </span>
            </div>
          )}
        </div>

        <div className={`${styles.content}`}>
          <h3 className={`${styles.title} text-ellipsis`}>{title}</h3>

          <p className={`${styles.description} text-ellipsis`}>{description}</p>

          <div className={`${styles.priceBlock} d-flex align-center`}>
            {oldPrice && (
              <data value={oldPrice} className={`${styles.oldPrice}`}>
                {oldPrice}
                <span className={`${styles.currency}`}>₽</span>
              </data>
            )}

            <data value={price} className={`${styles.price} ${oldPrice ? styles.priceAccent : ''}`}>
              {price}
              <span className={`${styles.currency}`}>₽</span>
            </data>
          </div>
        </div>
      </Link>
    </article>
  );
};
