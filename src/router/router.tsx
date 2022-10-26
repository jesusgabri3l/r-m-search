import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HomeView from '../modules/home/HomeView';
import SearchItems from '../modules/items/SearchItems';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeView />,
      },
      {
        path: '/items',
        element: <SearchItems />,
      },
    ],
  },
]);
