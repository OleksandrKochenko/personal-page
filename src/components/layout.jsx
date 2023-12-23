import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainNav } from './elements/main-nav';

export const Layout = () => {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
