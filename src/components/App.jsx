import { useEffect, useState } from 'react';
import { LineLoader } from './loaders/line-loader';
import { Layout } from './layout';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setIsLoading(false), 12000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      {isLoading && <LineLoader />}
      {!isLoading && <Layout />}
    </>
  );
};
