import React from 'react';
import { AppRoutes } from '@app/router/routes';
import { BrowserRouter } from 'react-router-dom';
//import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
