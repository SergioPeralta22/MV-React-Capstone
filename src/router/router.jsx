import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../layout/Layout';
import Country from '../pages/Country';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '//:id',
    element: (
      <Layout>
        <Country />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
