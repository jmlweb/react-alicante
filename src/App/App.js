import React from 'react';
import PropTypes from 'prop-types';

import StyledWrapper from './StyledWrapper';
import TopBar from './TopBar';
import globalStyles from './globalStyles';

globalStyles();

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
