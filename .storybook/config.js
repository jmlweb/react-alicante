import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults as setInfoDefaults } from '@storybook/addon-info';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

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
 * Load Stories
 */
const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
