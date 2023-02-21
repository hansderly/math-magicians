import React from 'react';
import { Screen } from '../../components';

import styles from './Quote.module.css';

function Quote() {
  return (
    <Screen>
      <div className={styles.container}>
        <h1>
          Mathematics is not about numbers,
          equations, computations, or algorithms: it is about understanding. _William Paul Thurston
        </h1>
      </div>
    </Screen>
  );
}

export default Quote;
