import { addDecorator, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module);
addDecorator(withA11y)
