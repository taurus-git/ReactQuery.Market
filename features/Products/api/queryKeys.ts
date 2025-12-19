import { createBaseQueryKeys } from '@shared/lib/createBaseQueryKeys';
import { CategoryProductsParams } from '@features/Products/types';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';

const productsBase = createBaseQueryKeys(QUERY_DOMAINS.products);

export const productsKeys = {
  ...productsBase,
} as const;

export const categoryProductsKeys = {
  list: (params: CategoryProductsParams) =>
    [QUERY_DOMAINS.categories, params.slug, QUERY_DOMAINS.products] as const,
} as const;
