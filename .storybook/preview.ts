import type { Preview } from '@storybook/react-vite';
import '../src/components/styles/global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
  },
  tags: ['autodocs'],
};

export default preview;