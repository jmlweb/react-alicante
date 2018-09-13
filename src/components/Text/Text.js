import styled from 'styled-components';
import {
  display,
  space,
  color,
  flex,
  fontFamily,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
} from 'styled-system';
import tag from 'clean-tag';

// it is possible to change the tag rendered based on "is" prop
// Example: <Text is="h2">Hi!</Text>
const Text = styled(tag.span)`
    ${display}
    ${space}
    ${color}
    ${flex}
    ${fontFamily}
    ${fontSize}
    ${textAlign}
    ${lineHeight}
    ${fontWeight}
    ${letterSpacing}
`;

export default Text;
