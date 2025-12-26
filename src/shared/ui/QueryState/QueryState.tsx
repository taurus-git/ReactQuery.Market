import React from 'react';
import { QueryStateInterface } from './QueryState.types';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';

export const QueryState = ({ isLoading, isError, children }: QueryStateInterface) => {
  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;
  return <>{children}</>;
};
