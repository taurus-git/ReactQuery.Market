import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleProduct } from '@features/Products/hooks/useSingleProduct';

export const SingleProductPage = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useSingleProduct(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>ID from URL: {id}</p>
    </div>
  );
};
