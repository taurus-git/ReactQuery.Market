import React from 'react';
//import styles from './ProductDelivery.module.scss';

interface ProductDeliveryProps {
  className?: string;
}

export const ProductDelivery = ({ className }: ProductDeliveryProps) => {
  return (
    <section className={`${className}`}>
      <h2>Delivery Information</h2>
      <p>
        Free delivery in <time>2-3 business days</time>
      </p>
    </section>
  );
};
