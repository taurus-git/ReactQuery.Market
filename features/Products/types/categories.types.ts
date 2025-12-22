export interface Category {
  name: string;
  slug: string;
  url: string;
}

export interface Categories {
  categories: Category[];
  length: number;
}

export interface CategoryProductsParams {
  slug: string;
}
