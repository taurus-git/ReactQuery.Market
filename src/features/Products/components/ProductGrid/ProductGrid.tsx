import React from 'react';
import { Product, ProductsResponse } from '@features/Products/types/products.types';
import { ProductCard } from '@features/Products/components/ProductCard/ProductCard';

interface ProductGridProps {
  productsResponse: ProductsResponse;
}

export const ProductGrid = ({ productsResponse }: ProductGridProps) => {
  const { products } = productsResponse;

  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
