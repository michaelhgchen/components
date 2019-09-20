// import { configure } from "@storybook/react";
// // automatically import all files ending in *.stories.tsx
// const req = require.context("../src/stories/", true, /\.stories\.tsx$/);

// function loadStories() {
//   req.keys().forEach(req);
// }

// configure(loadStories, module);

import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.tsx$/), module);

