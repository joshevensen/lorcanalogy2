import type {Preview} from '@storybook/react'
import '../style/globals.css';

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [withThemeByClassName({
    themes: {
      // nameOfTheme: 'classNameForTheme',
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  })],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default preview;
