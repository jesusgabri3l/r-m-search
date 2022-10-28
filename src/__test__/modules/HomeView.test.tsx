import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, expect, it } from 'vitest';

import HomeView from '../../modules/home/HomeView';
beforeEach(() => {
  render(
    <MemoryRouter>
      <HomeView />
    </MemoryRouter>,
  );
});
describe('Testing HomeView', () => {
  it('Should validate DOM', () => {
    const homeContainer = screen.getByTestId('home-test');
    const searchContainer = screen.getByTestId('search-test');
    const searchInput = screen.getByTestId('search-input-test');
    const searchButton = screen.getByTestId('search-button-test');

    expect(homeContainer).toBeInTheDocument();
    expect(searchContainer).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('Should appears error when input empty', async () => {
    const searchButton = screen.getByTestId('search-button-test');
    await userEvent.click(searchButton);
    expect(await screen.findByTestId('home-error-test')).toBeInTheDocument();
    expect(await screen.findByTestId('home-error-test')).toHaveTextContent(
      'Search input is empty, make sure to write something',
    );
  });
});
