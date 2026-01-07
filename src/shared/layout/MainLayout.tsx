import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@shared/layout/Header/components/Header/Header';
import { Footer } from '@shared/layout/Footer/Footer';
import { TopBar } from '@shared/layout/TopBar/components/TopBar';

export const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <main>{<Outlet />}</main>
      <Footer />
    </>
  );
};
