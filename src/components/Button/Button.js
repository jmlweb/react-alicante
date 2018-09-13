import React from 'react';
import styled, { withTheme } from 'styled-components';

import Box from '../Box';

/**
 * Styled Component
 */
const StyledButton = styled(Box)`
  &:hover {
    background-color: ${({ theme, bgHover }) => theme.colors[bgHover]};
    border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};
  }
`;

const Button = ({
  variant, size, theme, ...props
}) => {
  const color = variant === 'white' ? 'blackLight' : 'white';
  const colorHover = variant === 'white' ? 'black' : 'white';
  const bg = `${variant}Light`;
  const bgHover = variant;
  const borderColor = variant === 'white' ? 'blackLight' : variant;
  const borderColorHover = variant === 'white' ? 'black' : `${variant}Dark`;
  return (
    <StyledButton
      color={color}
      colorHover={colorHover}
      bg={bg}
      bgHover={bgHover}
      borderColor={borderColor}
      borderColorHover={borderColorHover}
      {...theme.defaults.buttonSizes[size]}
      is="button"
      blacklist={[
        'colorHover',
        'bgHover',
        'borderColor',
        'borderColorHover',
      ]}
      {...props}
    />
  );
};

Button.defaultProps = {
  variant: 'mediumGray',
  size: 'md',
};

export default withTheme(Button);
