import React from 'react';
import './CoreLayout.scss';
import PropTypes from 'prop-types';
import '../../styles/core.scss';

export const CoreLayout = ({ children }) => (
  <div style={{height: '100%'}}>
    {children}
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.node
};

export default CoreLayout;
