import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function HomeView() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  return (
    <main className="home-view">
      <img
        alt="logo"
        src="https://playbyplaytoys.es/wp-content/uploads/2021/01/rickymorty_bleed.png"
        className="home-view__image"
      />
      <p className="home-view__text">
        Hello there! You can Search for any{' '}
        <span className="text-primary font-bold">Rick & Morty</span> character by name.
      </p>
      <form className="flex items-center">
        <input
          className="input mt-8"
          placeholder="Rick Sanchez"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="button button--primary"
          onClick={() => navigate(`/characters?q=${value}`)}
        >
          Go
        </button>
      </form>
    </main>
  );
}

export default HomeView;
