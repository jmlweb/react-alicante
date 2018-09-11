import React from 'react';
import PropTypes from 'prop-types';

const HTMLRenderer = ({ children }) => <div dangerouslySetInnerHTML={{ __html: children }} />;

HTMLRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HTMLRenderer;
