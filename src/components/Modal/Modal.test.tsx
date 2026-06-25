import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders content when open', () => {
    render(<Modal open title="Settings">Hello</Modal>);

    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
