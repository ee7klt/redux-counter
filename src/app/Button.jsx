import React from 'react';
import Paper from 'material-ui/lib/paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

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
