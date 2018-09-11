import styled from 'styled-components';
import styledMap from 'styled-map';
import { tint, shade } from 'polished';

/**
 * Constants
 */
const [primary, danger, gray] = ['#31CEA6', '#F14C61', '#969696'];

const defaultColors = {
  primary,
  danger,
  default: gray,
};

const tintedColors = {
  primary: tint(0.9, primary),
  danger: tint(0.9, danger),
  default: tint(0.9, gray),
};

const shadedColors = {
  primary: shade(0.9, primary),
  danger: shade(0.9, danger),
  default: shade(0.9, gray),
};

/**
 * Styled Component
 */
const Button = styled.button`
  background-color: ${styledMap(tintedColors)};
  border: 1px solid;
  border-color: ${styledMap(defaultColors)};
  color: #fff;
  font-family: Roboto, serif;
  font-size: ${styledMap({
    sm: '13px',
    lg: '18px',
    default: '16px',
  })};
  padding: ${styledMap({
    sm: '5px 10px',
    lg: '15px 20px',
    default: '10px 15px',
  })};

  &:hover {
    background-color: ${styledMap(defaultColors)};
    border-color: ${styledMap(shadedColors)};
  }
`;

export default Button;
