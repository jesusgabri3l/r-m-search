import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, it } from 'vitest';

import CharacterResultView from '../../modules/characters/results/CharacterResultView';

describe('Testing Results Characters View', () => {
  it('Should validate DOM when setting Rick as query Parameter', async () => {
    render(
      <MemoryRouter initialEntries={['?q=Rick']}>
        <CharacterResultView />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('spinner-test')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByTestId('spinner-test'));
    expect(await screen.findByTestId('results-grid-test')).toBeInTheDocument();
    expect((await screen.findByTestId('results-grid-test')).children).toHaveLength(4);
    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
    expect(await screen.findByText('Adjudicator Rick')).toBeInTheDocument();
    expect(await screen.findByText('Alien Rick')).toBeInTheDocument();
    expect(await screen.findByText('Antenna Rick')).toBeInTheDocument();
  });

  it('Should validate alert when sending not existing character name as query Parameter', async () => {
    render(
      <MemoryRouter initialEntries={['?q=asdfghj']}>
        <CharacterResultView />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('spinner-test')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByTestId('spinner-test'));
    expect(await screen.findByRole('alert')).toBeInTheDocument();
    expect(await screen.findByRole('alert')).toHaveTextContent('No matching character');
  });
});
