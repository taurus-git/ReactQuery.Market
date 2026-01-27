import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MainLayout } from '@shared/layout/MainLayout';
import { ROUTES } from './constants';
import '@shared/ui/Icon/sprite';

const Home = lazy(() => import('@pages/HomePage'));
const Products = lazy(() => import('@pages/ProductsPage'));
const SingleProduct = lazy(() => import('@pages/SingleProductPage'));
const Category = lazy(() => import('@pages/CategoryPage'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.SINGLE_PRODUCT} element={<SingleProduct />} />
          <Route path={ROUTES.CATEGORY} element={<Category />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
