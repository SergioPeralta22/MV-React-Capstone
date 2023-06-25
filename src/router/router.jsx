import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../layout/Layout';
import Region from '../components/CountriesMenu';

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
    path: '/:countryName',
    element: (
      <Layout>
        <Region />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
