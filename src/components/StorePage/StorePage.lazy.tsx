import React, { lazy, Suspense } from 'react';

const LazyStorePage = lazy(() => import('./StorePage'));

const StorePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyStorePage {...props} />
  </Suspense>
);

export default StorePage;
