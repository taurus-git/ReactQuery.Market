import React from 'react';
import { useProducts } from '@features/Products/hooks/useProducts';

export const HomePage = () => {
  const { data, isLoading, isError } = useProducts();
  console.log(data);

  return <div>HomePage</div>;
};
