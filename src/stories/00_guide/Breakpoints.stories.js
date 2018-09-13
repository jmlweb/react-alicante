import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { storiesOf } from '@storybook/react';

import { MainWrapper } from '../decorators';

const StyledBpItem = styled.div`
  display: inline-block;
  padding: ${({ theme }) => theme.space[2]}px;
  background: #ccc;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
`;

const BreakpointsGallery = ({ theme }) => (
  <div>
    <h1>Current breakpoints</h1>
    {theme.breakpoints.map(v => (
      <StyledBpItem key={v} style={{ width: v }}>
        {v}
      </StyledBpItem>
    ))}
  </div>
);

BreakpointsGallery.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
};

const EnhancedBreakpointsGallery = withTheme(BreakpointsGallery);

storiesOf('Guide', module)
  .addDecorator(MainWrapper)
  .add('breakpoints', () => <EnhancedBreakpointsGallery />);
