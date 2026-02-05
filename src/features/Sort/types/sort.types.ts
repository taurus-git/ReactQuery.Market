export type SortBy = 'price' | 'rating' | 'title' | 'brand';
export type SortOrder = 'asc' | 'desc';

export interface SortOption {
  label: string;
  sortBy?: SortBy;
  order?: SortOrder;
}

export const SORT_PARAMS = {
  sortBy: 'sortBy',
  order: 'order',
} as const;

export const SORT_OPTIONS: SortOption[] = [
  {
    label: 'По умолчанию',
    // sortBy и order не указаны = без сортировки
  },
  {
    label: 'Сначала дешевые', // https://dummyjson.com/products?sortBy=price&order=asc
    sortBy: 'price',
    order: 'asc',
  },
  {
    label: 'Сначала дорогие', // https://dummyjson.com/products?sortBy=price&order=desc
    sortBy: 'price',
    order: 'desc',
  },
  {
    label: 'По названию: А-Я', // https://dummyjson.com/products?sortBy=brand&order=asc
    sortBy: 'title',
    order: 'asc',
  },
  {
    label: 'По названию: Я-А', // https://dummyjson.com/products?sortBy=brand&order=desc
    sortBy: 'title',
    order: 'desc',
  },
  {
    label: 'По рейтингу', // https://dummyjson.com/products?sortBy=rating&order=desc
    sortBy: 'rating',
    order: 'desc',
  },
];
