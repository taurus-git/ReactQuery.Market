import React from 'react';
import { Product } from '@features/Products/types/products.types';

interface ProductDescriptionProps {
  product: Product;
  className?: string;
}

export const ProductDescription = ({ product, className }: ProductDescriptionProps) => {
  console.log(product);
  return (
    <section className={`${className}`}>
      <h2>Description</h2>
      <p>Product description</p>
    </section>
  );
};
