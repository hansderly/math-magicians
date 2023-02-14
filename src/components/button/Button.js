/* eslint-disable react/prop-types */
import React, {} from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  children, value, onClick, color = '#e0e0e0', size,
}) => (
  <button onClick={onClick} type="button" className="container" value={value} style={{ width: size === 'xl' && '240px', backgroundColor: color }}>
    {children}
  </button>
);

Button.prototype = {
  children: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
