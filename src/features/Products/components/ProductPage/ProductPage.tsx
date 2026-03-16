import React from 'react';
import styles from './ProductPage.module.scss';
import { Product } from '@features/Products/types/products.types';
import { Container } from '@shared/layout/Container/Container';
import { ProductGallery } from '@features/Products/components/ProductGallery/ProductGallery';
import { ProductInfo } from '@features/Products/components/ProductInfo/ProductInfo';
import { ProductDelivery } from '@features/Products/components/ProductDelivery/ProductDelivery';
import { ProductDescription } from '@features/Products/components/ProductDescription/ProductDescription';
import { ProductSpecs } from '@features/Products/components/ProductSpecs/ProductSpecs';
import { ProductReviews } from '@features/Products/components/ProductReviews/ProductReviews';

interface ProductPageProps {
  product: Product;
}

export const ProductPage = ({ product }: ProductPageProps) => {
  const { images, description, reviews, rating } = product;
  return (
    <article className={`${styles.page}`}>
      <Container>
        <section className={`${styles.overview}`}>
          <ProductGallery images={images} className={`${styles.gallery}`} />
          <aside className={`${styles.sidebar}`}>
            <ProductInfo product={product} className={`${styles.info}`} />
            <ProductDelivery className={`${styles.delivery}`} />
          </aside>
          <ProductDescription description={description} className={`${styles.description}`} />
          <ProductSpecs dimensions={product.dimensions} className={`${styles.specs}`} />
          {reviews && (
            <ProductReviews reviews={reviews} rating={rating} className={`${styles.reviews}`} />
          )}
        </section>
      </Container>
    </article>
  );
};
