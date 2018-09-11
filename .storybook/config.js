import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults as setInfoDefaults } from '@storybook/addon-info';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

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
injectGlobal`
  ${normalize()};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const StyledWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.default};
`;

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
