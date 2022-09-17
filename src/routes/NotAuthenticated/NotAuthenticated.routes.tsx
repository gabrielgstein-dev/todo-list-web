import { Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage } from '~/framework/pages';

export const NotAuthenticatedRoutes: React.FC = () => {
  return (
    <Routes data-testid='routes'>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
};
