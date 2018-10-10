import React, { Component } from 'react';

import Button from './button';
import Display from './display';

const Counter = ({ counter, onIncrement, onDecrement }) => (
  <div className="center counter">
    <Button text="+" onClick={onIncrement} />
    <Display value={counter} />
    <Button text="-" onClick={onDecrement} />
  </div>
);

export default Counter;