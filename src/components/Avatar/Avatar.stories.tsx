import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {
  args: { name: 'Jane Doe', size: 'md' },
};

export const Small: Story = {
  args: { name: 'John Smith', size: 'sm' },
};

export const Large: Story = {
  args: { name: 'Alex Lee', size: 'lg' },
};
