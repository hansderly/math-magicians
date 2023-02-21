import React from 'react';
import PropTypes from 'prop-types';

import styles from './Screen.module.css';

function Screen({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
