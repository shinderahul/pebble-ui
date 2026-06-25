import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders its children', () => {
    render(<Card><div>Card content</div></Card>);

    expect(screen.getByText('Card content')).toBeInTheDocument();
  });
});
