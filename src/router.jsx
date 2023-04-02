import { Suspense, lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Account = lazy(() => import('./pages/Account'));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { element: <Home />, index: true },
      {
        path: '/account',
        element: <Account />,
      },
    ],
  },
]);

export default router;
