import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@shared/layout/Header/components/Header/Header';
import { Footer } from '@shared/layout/Footer/Footer';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>{<Outlet />}</main>
      <Footer />
    </>
  );
};
