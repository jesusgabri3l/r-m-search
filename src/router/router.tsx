import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import CharacterDetailView from '../modules/characters/detail/CharacterDetailView';
import CharactersResultView from '../modules/characters/results/CharacterResultView';
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
        element: <CharactersResultView />,
      },
      {
        path: 'characters/:id',
        element: <CharacterDetailView />,
      },
    ],
  },
]);
