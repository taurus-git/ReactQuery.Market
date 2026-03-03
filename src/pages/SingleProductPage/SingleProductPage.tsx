import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleProduct } from '@features/Products/hooks/useSingleProduct';
import { ErrorMessage } from '@shared/ui/ErrorMessage';
import { QueryState } from '@shared/ui/QueryState';
import { ProductPage } from '@features/Products/components/ProductPage/ProductPage';

export const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <ErrorMessage />;

  const query = useSingleProduct(Number(id));

  return <QueryState query={query}>{(product) => <ProductPage product={product} />}</QueryState>;
};
