import React from 'react';
import PropTypes from 'prop-types';

import styles from './Showbox.module.css';

const ShowBox = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

ShowBox.prototype = {
  children: PropTypes.string,
};

export default ShowBox;
