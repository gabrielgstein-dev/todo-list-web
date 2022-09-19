import { Routes, Route } from 'react-router-dom';
import { HomePage } from '~/framework/pages';

export const AuthenticatedRoutes: React.FC = () => {
  return (
    <Routes data-testid='routes'>
      <Route path='/'>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
