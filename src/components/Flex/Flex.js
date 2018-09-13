import styled from 'styled-components';
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  order,
  flexBasis,
} from 'styled-system';

import Box from '../Box';

const Flex = styled(Box)`
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
  ${alignContent}
  ${justifyItems}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${flexBasis}
`;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
