import React from 'react';
import { ProjectTemplate } from '@templates';

export const HomePage: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ProjectTemplate />
    </React.Suspense>
  );
};
