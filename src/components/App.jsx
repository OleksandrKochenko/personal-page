import { lazy, useEffect, useState } from 'react';
import { LineLoader } from './loaders/line-loader';
import { Layout } from './layout';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./home-page'));

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setIsLoading(false), 12000);
    return () => clearTimeout(timerId);
  }, []);

  return isLoading ? (
    <LineLoader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
