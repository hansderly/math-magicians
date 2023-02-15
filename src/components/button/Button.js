import React, {} from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children, onClick, color = '#e0e0e0', size,
}) => {
  // eslint-disable-next-line no-param-reassign
  color = children === '=' ? '#F5913E' : color;
  return (
    <button onClick={onClick} type="button" className={styles.container} style={{ width: size === 'xl' && '240px', backgroundColor: color }}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: '#e0e0e0',
  size: '',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
