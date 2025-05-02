import React, { FC } from 'react';
import LoadingProvider from './LoadingProvider';
import AppRoutes from '../routes/AppRoutes'


const App: FC = () => {
  return (
    <>
      <LoadingProvider>
        <AppRoutes />
      </LoadingProvider>
    </>
  );
};

export default App;
