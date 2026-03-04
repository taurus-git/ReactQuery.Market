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
  const { images } = product;
  return (
    <article className={`${styles.page}`}>
      <Container>
        <section className={`${styles.overview}`}>
          <ProductGallery images={images} className={`${styles.gallery}`} />
          <aside className={`${styles.sidebar}`}>
            <ProductInfo product={product} className={`${styles.info}`} />
            <ProductDelivery className={`${styles.delivery}`} />
          </aside>
          <ProductDescription product={product} className={`${styles.description}`} />
          <ProductSpecs product={product} className={`${styles.specs}`} />
          <ProductReviews product={product} className={`${styles.reviews}`} />
        </section>
      </Container>
    </article>
  );
};
