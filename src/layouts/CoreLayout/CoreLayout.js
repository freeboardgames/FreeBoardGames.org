import React from 'react';
import PropTypes from 'prop-types';

export const CoreLayout = ({ children }) => (
  <div style={{height: '100%'}}>
    {children}
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.node
};

export default CoreLayout;
