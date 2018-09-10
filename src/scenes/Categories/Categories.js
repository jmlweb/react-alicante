import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({
  match: {
    params: { type },
  },
}) => <div>{type}</div>;

Categories.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
};

export default Categories;
