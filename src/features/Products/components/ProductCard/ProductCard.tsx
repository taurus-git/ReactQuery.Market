import React from 'react';
import { Product } from '@features/Products/types/products.types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { title, price } = product;

  return (
    <article>
      {/*<img src='image' alt="" />*/}
      <h3>{title}</h3>
      <p>description</p>
      <div>
        <p>
          {price} <span>$</span>
        </p>
        <p>
          17392 <span>$</span>
        </p>
      </div>
    </article>
  );
};
