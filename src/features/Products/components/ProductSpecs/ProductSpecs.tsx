import React from 'react';
import { Product } from '@features/Products/types/products.types';

interface ProductSpecsProps {
  product: Product;
  className?: string;
}

export const ProductSpecs = ({ product, className }: ProductSpecsProps) => {
  console.log(product);
  return (
    <section className={`${className}`}>
      <h2>Specifications</h2>
      <dl>
        <dt>Depth</dt>
        <dd>50 cm</dd>
        <dt>Height</dt>
        <dd>120 cm</dd>
        <dt>Width</dt>
        <dd>80 cm</dd>
        <dt>Weight</dt>
        <dd>12 kg</dd>
      </dl>
    </section>
  );
};
