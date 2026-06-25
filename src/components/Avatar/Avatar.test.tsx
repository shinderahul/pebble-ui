import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders initials when no image is provided', () => {
    render(<Avatar name="Jane Doe" />);

    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});
