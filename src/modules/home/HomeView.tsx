function HomeView() {
  return (
    <div className="flex-center flex-col page-wrapper">
      <img
        alt="logo"
        src="https://playbyplaytoys.es/wp-content/uploads/2021/01/rickymorty_bleed.png"
        width="400"
        height="400"
      />
      <p className="text-gray font-medium text-xl mt-16">
        Hello there! You can Search for any{' '}
        <span className="text-primary font-bold">Rick & Morty</span> character by name.
      </p>
      <input className="input mt-8" placeholder="Rick Sanchez" />
    </div>
  );
}

export default HomeView;
