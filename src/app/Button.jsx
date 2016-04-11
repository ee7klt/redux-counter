import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';
import SvgIcon from 'material-ui/lib/svg-icon';
const buttonStyle ={
  flexGrow: '2',
}

const liStyle = {
  display: 'flex',
  flexDirection: 'row',
  listStyleType: 'none',
  justifyContent: 'space-around',
  margin: '10px',
}

const buttonContainerStyle = {
    display: 'flex',
  flexDirection: 'column',
  flexGrow: '2',
    justifyContent: 'space-around',
}

const cardStyle = {
  flexGrow: '8',
  fontSize: 'large',
}

const Button = ({
  count,
  id,
  onIncrementClick,
  onDecrementClick,
  onRemoveClick,
}) => (
  <li  style = {liStyle}>
    <div
      style = {buttonContainerStyle}>
      <FlatButton

        onClick = {
          onIncrementClick
        }
        icon={<i className="material-icons">keyboard_arrow_up</i>}
        />

      <FlatButton

        onClick = {
          onDecrementClick
        }
        icon = {<i className="material-icons">keyboard_arrow_down</i>}
        />
    </div>

    <Card style={cardStyle}>
      <CardText>{id}: {count} </CardText>
    </Card>
    <FlatButton
      style={buttonStyle}
      onClick = {onRemoveClick}
      icon = {<i className="material-icons">clear</i>}/>
  </li>

);

export default Button;
