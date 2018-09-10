import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import TopBar from './TopBar';

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

const App = ({ children }) => (
  <StyledWrapper>
    <TopBar />
    {children}
  </StyledWrapper>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
