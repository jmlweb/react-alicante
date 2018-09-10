import React from 'react';
import PropTypes from 'prop-types';

import logoFB from './logofb.svg';
import logoFW from './logofw.svg';

const Logo = ({ dark, alt, ...props }) => <img src={dark ? logoFB : logoFW} alt={alt} {...props} />;

Logo.defaultProps = {
  dark: false,
  alt: 'Desk Surfer',
};

Logo.propTypes = {
  dark: PropTypes.bool,
  alt: PropTypes.string,
};

export default Logo;
