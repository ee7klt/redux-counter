
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const AddCounterButton = ({
  onButtonClick,
}) => (
  <RaisedButton onClick = {onButtonClick} label = 'Add Counter'/>
);


export default AddCounterButton;
