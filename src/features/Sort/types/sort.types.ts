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
  },
  {
    label: 'Сначала дешевые',
    sortBy: 'price',
    order: 'asc',
  },
  {
    label: 'Сначала дорогие',
    sortBy: 'price',
    order: 'desc',
  },
  {
    label: 'По названию: А-Я',
    sortBy: 'title',
    order: 'asc',
  },
  {
    label: 'По названию: Я-А',
    sortBy: 'title',
    order: 'desc',
  },
  {
    label: 'По рейтингу',
    sortBy: 'rating',
    order: 'desc',
  },
];
