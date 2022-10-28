import { useState } from 'react';

import BaseSearchForm from '../../components/base/baseSearchForm/BaseSearchForm';

function HomeView() {
  const [error, setError] = useState<boolean>(false);
  //Used in case search input is empty
  const errorHandler = (payload: boolean) => setError(payload);
  return (
    <main className="home-view" data-testid="home-test">
      <img
        alt="logo"
        src="https://playbyplaytoys.es/wp-content/uploads/2021/01/rickymorty_bleed.png"
        className="home-view__image"
      />
      <strong className="home-view__text">
        Hello there! You can search for any{' '}
        <span className="text-primary font-bold">Rick & Morty</span> character by name.
      </strong>
      <BaseSearchForm errorHandler={errorHandler} />
      {error && (
        <p
          className="text-red-500 font-bold text-center mt-4"
          data-testid="home-error-test"
        >
          Search input is empty, make sure to write something
        </p>
      )}
    </main>
  );
}

export default HomeView;
