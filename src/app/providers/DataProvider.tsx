import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { categoriesKeys } from '@features/Products/api/queryKeys';
import { fetchCategories } from '@features/Products/api/categoriesApi';
import { TIME } from '@shared/types/time.types';

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: categoriesKeys.lists(),
      queryFn: () => fetchCategories(),
      staleTime: TIME.HOUR,
    });
  });

  return <>{children}</>;
};
