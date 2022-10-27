import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import SearchItems from '../modules/characters/characters/SearchItems';
import CharacterDetail from '../modules/characters/detail/CharacterDetail';
import HomeView from '../modules/home/HomeView';

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
        path: 'characters',
        element: <SearchItems />,
      },
      {
        path: 'characters/:id',
        element: <CharacterDetail />,
      },
    ],
  },
]);
