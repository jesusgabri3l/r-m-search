import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, it } from 'vitest';

import defaultImage from '../../../assets/default.png';
import BaseCard from '../../../components/base/BaseCard';
describe('Testing BaseCard component', () => {
  it('Should validate DOM when passing props', () => {
    render(
      <MemoryRouter>
        <BaseCard
          title="Test title"
          description="Test description"
          image={defaultImage}
          linkRoute="/character/1"
        />
      </MemoryRouter>,
    );
    const cardContainer = screen.getByTestId('card-test');
    const cardImage = screen.getByTestId('card-image-test');
    const cardTitle = screen.getByTestId('card-title-test');
    const cardDescription = screen.getByTestId('card-description-test');

    expect(cardContainer).toBeInTheDocument();
    expect(cardImage).toHaveAttribute('src', defaultImage);
    expect(cardTitle).toHaveTextContent('Test title');
    expect(cardDescription).toHaveTextContent('Test description');
  });

  it('Should validate DOM when NOT passing props', () => {
    render(
      <MemoryRouter>
        <BaseCard />
      </MemoryRouter>,
    );
    const cardContainer = screen.getByTestId('card-test');
    const cardImage = screen.getByTestId('card-image-test');
    const cardTitle = screen.getByTestId('card-title-test');
    const cardDescription = screen.getByTestId('card-description-test');

    expect(cardContainer).toBeInTheDocument();
    expect(cardImage).toHaveAttribute('src', defaultImage);
    expect(cardTitle).toHaveTextContent('Default title');
    expect(cardDescription).toHaveTextContent('Default description');
  });
});
