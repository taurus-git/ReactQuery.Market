import React from 'react';
import styles from './ProductDescription.module.scss';

interface ProductDescriptionProps {
  description: string;
  className?: string;
}

export const ProductDescription = ({ description, className }: ProductDescriptionProps) => {
  return (
    <section className={`${className}`}>
      <h2 className={styles.title}>Характеристики</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
};
