import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  it('renders label and options', () => {
    render(
      <Select
        label="Role"
        helperText="Choose one"
        options={[{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }]}
      />
    );

    expect(screen.getByLabelText('Role')).toBeInTheDocument();
    expect(screen.getByText('Choose one')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Admin' })).toBeInTheDocument();
  });
});
