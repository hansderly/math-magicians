/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Button from '../button/Button';

import './Calculator.css';

const Calculator = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="row">
        <Button onClick={handleClick}>AC</Button>
        <Button onClick={handleClick}>+/-</Button>
        <Button onClick={handleClick}>%</Button>
        <Button onClick={handleClick} color="#F5913E">/</Button>
      </div>
      <div className="row">
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick} color="#F5913E">x</Button>
      </div>
      <div className="row">
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleClick} color="#F5913E">-</Button>
      </div>
      <div className="row">
        <Button onClick={handleClick}>3</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick} color="#F5913E">+</Button>
      </div>
      <div className="row">
        <Button onClick={handleClick} size="xl">0</Button>
        <Button onClick={handleClick}>.</Button>
        <Button onClick={handleClick} color="#F5913E">=</Button>
      </div>
    </>
  );
};

export default Calculator;
