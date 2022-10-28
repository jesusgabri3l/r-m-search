import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CharacterDetailView from '../../modules/characters/detail/CharacterDetailView';

describe('Testing Character detail View', () => {
  it('Should validate DOM when setting 1 as ID', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <CharacterDetailView />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('spinner-test')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByTestId('spinner-test'));
    expect(await screen.findByTestId('detail-test')).toBeInTheDocument();
    expect(await screen.findByTestId('detail-title-test')).toHaveTextContent(
      'Rick Sanchez',
    );
    expect(await screen.findByText('Alive')).toBeInTheDocument();
    expect(await screen.findByText('Human')).toBeInTheDocument();
    expect(await screen.findByText('Earth (C-137)')).toBeInTheDocument();
    expect(await screen.findByText('Male')).toBeInTheDocument();
  });

  it('Should validate alert when sending not existing ID', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/13791823']}>
        <CharacterDetailView />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('spinner-test')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByTestId('spinner-test'));
    expect(await screen.findByRole('alert')).toBeInTheDocument();
    expect(await screen.findByRole('alert')).toHaveTextContent('No matching character');
  });

  it('Should validate alert when sending not an number as ID', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/test']}>
        <CharacterDetailView />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('spinner-test')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByTestId('spinner-test'));
    expect(await screen.findByRole('alert')).toBeInTheDocument();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Request failed with status code 500',
    );
  });
});
