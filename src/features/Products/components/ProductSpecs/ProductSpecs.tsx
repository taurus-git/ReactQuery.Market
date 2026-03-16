import React from 'react';
import styles from './ProductSpecs.module.scss';
import { Dimensions } from '@features/Products/types/products.types';

interface ProductSpecsProps {
  dimensions?: Dimensions;
  className?: string;
}

export const ProductSpecs = ({ dimensions, className }: ProductSpecsProps) => {
  if (!dimensions) return null;

  const entries = Object.entries(dimensions);

  return (
    <section className={`${className} ${styles.specs}`}>
      {entries.map(([key, value]) => (
        <dl key={key + value}>
          <dt>{key}</dt>
          <dd>{value} cm</dd>
        </dl>
      ))}
    </section>
  );
};
