import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: { title: 'Info', children: 'This is an informational toast.', variant: 'info' },
};

export const Success: Story = {
  args: { title: 'Saved', children: 'Changes were saved.', variant: 'success' },
};

export const Error: Story = {
  args: { title: 'Error', children: 'Something went wrong.', variant: 'danger' },
};
