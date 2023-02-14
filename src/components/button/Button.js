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

Button.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Button;
