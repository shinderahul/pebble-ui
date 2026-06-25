import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Open: Story = {
  args: {
    open: true,
    title: 'Edit profile',
    children: 'This is a modal body.',
  },
};
