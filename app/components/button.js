import React from 'react';

const Button = props => (
  <div>
    <button onClick={props.onClick}>
      {props.text}
    </button>
  </div>
);

export default Button;