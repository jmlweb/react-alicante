import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import StyledWrapper from './StyledWrapper';
import TopBar from './TopBar';
import globalStyles from './globalStyles';

const App = ({ children, theme }) => {
  globalStyles(theme);
  return (
    <StyledWrapper>
      <TopBar />
      {children}
    </StyledWrapper>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withTheme(App);
