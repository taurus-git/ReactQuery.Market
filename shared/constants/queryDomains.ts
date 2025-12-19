export const QUERY_DOMAINS = {
  products: 'products',
  categories: 'categories',
} as const;

export type QueryDomains = (typeof QUERY_DOMAINS)[keyof typeof QUERY_DOMAINS];
