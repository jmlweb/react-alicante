import styled from 'styled-components';
import {
  display,
  space,
  color,
  flex,
  fontSize,
  maxWidth,
  minWidth,
  size,
  ratio,
  verticalAlign,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  borderRadius,
  borderColor,
  borders,
  boxShadow,
  opacity,
  overflow,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
} from 'styled-system';
import tag from 'clean-tag';

const Box = styled(tag.div)`
  ${display}
  ${space}
  ${color}
  ${flex}
  ${fontSize}
  ${maxWidth}
  ${minWidth}
  ${size}
  ${ratio}
  ${verticalAlign}
  ${background}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${borderRadius}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${opacity}
  ${overflow}
  ${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
`;

export default Box;
