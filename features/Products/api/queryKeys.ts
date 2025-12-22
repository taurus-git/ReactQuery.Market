import { createBaseQueryKeys } from '@shared/lib/createBaseQueryKeys';
import { CategoryProductsParams } from '@features/Products/types';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';

const productsBase = createBaseQueryKeys(QUERY_DOMAINS.products);
const categoriesBase = createBaseQueryKeys(QUERY_DOMAINS.categories);

export const productsKeys = {
  ...productsBase,
} as const;

export const singleProductKeys = {
  ...productsBase,
  detail: (id: number) => [QUERY_DOMAINS.products, id],
} as const;

export const categoryProductsKeys = {
  list: (params: CategoryProductsParams) =>
    [QUERY_DOMAINS.categories, params.slug, QUERY_DOMAINS.products] as const,
} as const;

export const categoriesKeys = {
  ...categoriesBase,
} as const;

export const categoryKeys = {
  ...categoriesBase,
  detail: (slug: string) => [QUERY_DOMAINS.categories, slug],
} as const;
