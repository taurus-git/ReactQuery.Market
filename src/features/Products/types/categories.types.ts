export interface Category {
  name: string;
  slug: string;
  url: string;
}

export interface CategoryProductsParams {
  slug: string;
}

export interface ProductsCategoryParams {
  category?: string;
}
