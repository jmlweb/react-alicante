import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults as setInfoDefaults } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import { setOptions } from '@storybook/addon-options';

import { globalStyles, StyledWrapper } from '../src/App';
import theme from '../src/theme';

/**
 * Info addon defaults
 */
setInfoDefaults({
  inline: true,
});

/**
 * Global decorator
 */
globalStyles();

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <StyledWrapper>{story()}</StyledWrapper>
  </ThemeProvider>
));

/**
 * Options defaults
 */
setOptions({
  name: 'Desksurfer',
  addonPanelInRight: true,
  selectedAddonPanel: 'knobs',
})

/**
 * Load Stories
 */
const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
