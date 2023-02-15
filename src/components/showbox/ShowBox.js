import React from 'react';
import PropTypes from 'prop-types';

import styles from './Showbox.module.css';

const ShowBox = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

ShowBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ShowBox;
