import React from 'react';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { UseQueryResult } from '@tanstack/react-query';

interface QueryStateProps<T> {
  query: UseQueryResult<T>;
  children: (data: T) => React.ReactNode;
  skeleton?: React.ReactNode;
}

export const QueryState = <T,>({ query, children, skeleton }: QueryStateProps<T>) => {
  const { data, isLoading, isError } = query;

  if (isError && !data) return <ErrorMessage />;

  if (data) return <>{children(data)}</>;

  if (isLoading) return <>{skeleton || <Loader />}</>;

  return null;
};
