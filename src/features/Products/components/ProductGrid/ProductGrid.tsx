import React from 'react';
import styles from './ProductGrid.module.scss';
import { Product, ProductsResponse } from '@features/Products/types/products.types';
import { ProductCard } from '@features/Products/components/ProductCard/ProductCard';

interface ProductGridProps {
  productsResponse: ProductsResponse;
}

export const ProductGrid = ({ productsResponse }: ProductGridProps) => {
  const { products } = productsResponse;

  return (
    <ul className={`${styles.productGrid}`}>
      {products.map((product: Product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
