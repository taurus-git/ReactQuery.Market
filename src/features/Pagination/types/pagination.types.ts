export interface ProductsPaginationParams {
  limit?: number;
  skip?: number;
  currentPage?: number;
}

export const PAGINATION_PARAMS = {
  page: 'page',
} as const;

export type PaginationPage = number | string;

export const PaginateNavTypes = { prev: 'prev', next: 'next' } as const;
export type PaginateNavType = (typeof PaginateNavTypes)[keyof typeof PaginateNavTypes];

export interface PaginationContext {
  currentPage: number;
  totalPages: number;
}
