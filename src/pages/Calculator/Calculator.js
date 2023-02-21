import React from 'react';
import { Screen, Calculator as CalculatorComponent } from '../../components';

import styles from './Calculator.module.css';

function Calculator() {
  return (
    <Screen>
      <div className={styles.container}>
        <div>
          <h1>Let`s do some magics!😁</h1>
        </div>
        <div>
          <CalculatorComponent />
        </div>
      </div>
    </Screen>
  );
}

export default Calculator;
