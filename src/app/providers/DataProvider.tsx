import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { categoriesQueries } from '@features/Products/api/categoriesQueries';

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(categoriesQueries.all());
  }, [queryClient]);

  return <>{children}</>;
};
