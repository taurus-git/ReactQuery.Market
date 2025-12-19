import React from 'react';
import { Product, ProductsInCategory } from '@features/Products/types/products.types';

interface ProductGridProps {
  data: ProductsInCategory;
}

export const ProductGrid = ({ data }: ProductGridProps) => {
  const { products } = data;
  return (
    <ul>
      {products.map((product: Product) => (
        <li>{product.title}</li>
      ))}
    </ul>
  );
};
