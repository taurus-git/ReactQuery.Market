import React from 'react';
import { useParams } from 'react-router-dom';

export const SingleProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  return <div>SingleProductPage</div>;
};
