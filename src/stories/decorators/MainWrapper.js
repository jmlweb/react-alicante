import React from 'react';

import { StyledMainWrapper } from '../components';

const MainWrapper = story => (
  <StyledMainWrapper>
    {story()}
  </StyledMainWrapper>
);

export default MainWrapper;
