import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import routes from './routes';

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
