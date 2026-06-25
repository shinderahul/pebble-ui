import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: { children: 'Neutral', variant: 'neutral' },
};

export const Primary: Story = {
  args: { children: 'Primary', variant: 'primary' },
};

export const Success: Story = {
  args: { children: 'Success', variant: 'success' },
};

export const Danger: Story = {
  args: { children: 'Danger', variant: 'danger' },
};
