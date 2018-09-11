import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${normalize()};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
