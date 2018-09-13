import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';

export default theme => injectGlobal`
  ${normalize()};

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${theme.fonts.default};
    font-size: ${theme.fontSizes[1]}px;
    @media(min-width: ${theme.breakpoints[theme.defaults.fontChangeBp]}) {
      font-size: ${theme.fontSizes[2]}px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  b {
    font-weight: ${theme.fontWeights.bold};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  p {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    font-size: ${theme.fontSizes[5]}px;
    @media(min-width: ${theme.breakpoints[theme.defaults.fontChangeBp]}) {
      font-size: ${theme.fontSizes[6]}px;
    }
  }

  h2 {
    font-size: ${theme.fontSizes[4]}px;
    @media(min-width: ${theme.breakpoints[theme.defaults.fontChangeBp]}) {
      font-size: ${theme.fontSizes[5]}px;
    }
  }

  h3 {
    font-size: ${theme.fontSizes[3]}px;
    @media(min-width: ${theme.breakpoints[theme.defaults.fontChangeBp]}) {
      font-size: ${theme.fontSizes[4]}px;
    }
  }

  h4 {
    font-size: ${theme.fontSizes[2]}px;
    @media(min-width: ${theme.breakpoints[theme.defaults.fontChangeBp]}) {
      font-size: ${theme.fontSizes[3]}px;
    }
  }

  h5 {
    font-size: ${theme.fontSizes[1]}px;
    @media(min-width: ${theme.breakpoints[theme.defaults.fontChangeBp]}) {
      font-size: ${theme.fontSizes[2]}px;
    }
  }

  h6 {
    font-size: ${theme.fontSizes[0]}px;
    @media(min-width: ${theme.breakpoints[theme.defaults.fontChangeBp]}) {
      font-size: ${theme.fontSizes[1]}px;
    }
  }

  h4,
  h5,
  h6 {
    text-transform: uppercase;
  }
`;
