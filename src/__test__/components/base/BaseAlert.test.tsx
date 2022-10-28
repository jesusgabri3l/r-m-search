import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import BaseAlert from '../../../components/base/BaseAlert';
describe('Testing BaseAlert component', () => {
  it('Should validate DOM when passing props', () => {
    render(
      <BaseAlert
        title="Woops, i am doing some testing"
        description="Test description"
        icon="warning"
        type="info"
      />,
    );
    const alertContainer = screen.getByRole('alert');
    const title = screen.getByTestId('alert-title-test');
    const description = screen.getByTestId('alert-description-test');
    const icon = screen.getByTestId('alert-icon-test');

    expect(alertContainer).toBeInTheDocument();
    expect(alertContainer).toHaveClass('alert alert--info');
    expect(title).toHaveTextContent('Woops, i am doing some testing');
    expect(description).toHaveTextContent('Test description');
    expect(icon).toHaveClass('fas fa-warning');
  });

  it('Should validate DOM when NOT passing props', () => {
    render(<BaseAlert />);
    const alertContainer = screen.getByRole('alert');
    const title = screen.getByTestId('alert-title-test');
    const description = screen.getByTestId('alert-description-test');
    const icon = screen.getByTestId('alert-icon-test');

    expect(alertContainer).toBeInTheDocument();
    expect(alertContainer).toHaveClass('alert alert--error');
    expect(title).toHaveTextContent('WOops, something went wrong');
    expect(description).toHaveTextContent(
      'Looks like something went wrong, try to reach out the support team.',
    );
    expect(icon).toHaveClass('fas fa-warning');
  });
});
