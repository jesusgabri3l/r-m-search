import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, expect, it } from 'vitest';

import BaseSearchForm from '../../../components/base/baseSearchForm/BaseSearchForm';
beforeEach(() => {
  render(
    <MemoryRouter>
      <BaseSearchForm errorHandler={() => console.log('Error')} />
    </MemoryRouter>,
  );
});
describe('Testing BaseSearch component', () => {
  it('Should validate DOM', () => {
    const searchContainer = screen.getByTestId('search-test');
    const searchInput = screen.getByTestId('search-input-test');
    const searchButton = screen.getByTestId('search-button-test');

    expect(searchContainer).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
    expect(searchButton).toHaveTextContent('Go');
  });
  it('Should validate input typing', async () => {
    const searchInput = screen.getByTestId('search-input-test');

    expect(searchInput).toHaveValue('');
    await userEvent.type(searchInput, 'Rick Sanchez');
    expect(searchInput).toHaveValue('Rick Sanchez');
  });
});
