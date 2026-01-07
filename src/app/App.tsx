import React from 'react';
import { AppRoutes } from '@app/router/routes';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CitySelectorProvider } from '@features/DeliveryRegion/context/CitySelectorContext';

function App() {
  const queryClient = new QueryClient();
  const Router = __DEV__ ? BrowserRouter : HashRouter;

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <CitySelectorProvider>
          <AppRoutes />
          <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        </CitySelectorProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
