import React, { Component } from 'react';

import Button from './button';
import Display from './display';

const App = ({ counter, onIncrement, onDecrement }) => (
  <div>
    <Button text="+" onClick={onIncrement} />
    <Display value={counter} />
    <Button text="-" onClick={onDecrement} />
  </div>
);

export default App;