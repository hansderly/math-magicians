import React, {} from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children, value, onClick, color = '#e0e0e0', size,
}) => (
  <button onClick={onClick} type="button" className={styles.container} value={value} style={{ width: size === 'xl' && '240px', backgroundColor: color }}>
    {children}
  </button>
);

Button.prototype = {
  children: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
