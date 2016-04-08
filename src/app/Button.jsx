import React from 'react';


const Button = ({
  count,
  id,
  onIncrementClick,
  onDecrementClick,
  onRemoveClick,
}) => (
  <li  style = {{listStyleType: 'none'}}>
    {id} <button onClick = {
          onIncrementClick
        }
       >+</button>
    <span>{count}</span>
    <button onClick = {
        onDecrementClick
      }>-</button>
    <button onClick = {onRemoveClick}>x</button>
  </li>

);

export default Button;
