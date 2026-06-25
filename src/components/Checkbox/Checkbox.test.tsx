import React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders the label', () => {
    render(<Checkbox label="Accept terms" />);

    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });
});
