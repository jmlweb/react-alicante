import styled from 'styled-components';
import LinkTo from '@storybook/addon-links/react';

const StoryLinker = styled(LinkTo)`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
`;

export default StoryLinker;
