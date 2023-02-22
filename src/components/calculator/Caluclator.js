import React, { useState } from 'react';
import Button from '../button/Button';
import ShowBox from '../showbox/ShowBox';
import calculate from '../../logic';

import styles from './Calculator.module.css';

const Calculator = () => {
  const [result, setResult] = useState(0);

  const calculator = [
    {
      ac: 'AC',
      plusminus: '+/-',
      modulo: '%',
      divide: '÷',
    },
    {
      seven: 7,
      eight: 8,
      nine: 9,
      multiply: 'x',
    },
    {
      four: 4,
      five: 5,
      six: 6,
      minus: '-',
    },
    {
      one: 1,
      two: 2,
      three: 3,
      plus: '+',
    },
    {
      zero: 0,
      dot: '.',
      equal: '=',
    },
  ];

  const handleClick = (e) => {
    setResult((prevState) => calculate(prevState, e.target.innerText));
  };

  return (
    <>
      <ShowBox data-testid="showBox">{result.next || result.total || 0}</ShowBox>
      {calculator.map((row) => (
        <div key={Math.random()} className={styles.row}>
          {Object.values(row).map((el, i) => (
            <Button size={el === 0 ? 'xl' : ''} key={el} color={i === 3 ? '#F5913E' : ''} onClick={handleClick}>{el}</Button>
          ))}
        </div>
      ))}
    </>
  );
};

export default Calculator;
