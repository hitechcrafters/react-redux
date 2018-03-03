import React from 'react';

const Button = ({ onClick, text }) => (
  <div>
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  </div>
);

export default Button;