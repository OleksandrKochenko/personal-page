import { lazy, useEffect, useState } from 'react';
import { LineLoader } from './loaders/line-loader';
import { Layout } from './layout';
import { Route, Routes } from 'react-router-dom';
import '../index.css';
import '../main.scss';

const HomePage = lazy(() => import('./home-page'));
const ProjectsPage = lazy(() => import('./projects-page'));
const ServicesPage = lazy(() => import('./services-page'));
const CertificatesPage = lazy(() => import('./certificates-page'));
const InterestsPage = lazy(() => import('./interests-page'));

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setIsLoading(false), 12000);
    return () => clearTimeout(timerId);
  }, []);

  return isLoading ? (
    <LineLoader handleScip={() => setIsLoading(false)} />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/interests" element={<InterestsPage />} />
      </Route>
    </Routes>
  );
};
