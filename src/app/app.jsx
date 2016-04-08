import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';
import {createStore} from 'redux';
import {counterApp} from './counterApp.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import Button from './Button.jsx';
import AddCounterButton from './AddCounterButton.jsx'


const store = createStore(counterApp);







let nextCounterId = 0;



class AddCounter extends Component {

render() {
   return <div>
     <AddCounterButton onButtonClick = {
         () => {
           store.dispatch({
             type: 'ADD_COUNTER',
             id: nextCounterId++,
           })
         }
       } />
    </div>
}
}


class Counters extends Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
    this.forceUpdate()
  );
}


componentWillUnmount() {
  this.unsubscribe();
}


render() {
  const state = store.getState();
  const counters = state.counters;
  //console.log(state.counters[0]);

  if (counters[0]) {
    return <ul>
      {counters.map(x => <Button
        id = {x.id}
        key = {x.id}
        count = {x.count}
        onIncrementClick = {
          () => {
            store.dispatch({
              type:'INCREMENT',
              id: x.id,
            })
          }
        }
        onDecrementClick = {
          () => {
            store.dispatch({
              type:'DECREMENT',
              id: x.id,
            })
          }
        }
        onRemoveClick = {
          () => {
            store.dispatch({
              type: 'REMOVE_COUNTER',
              id: x.id,
            })
          }
        }
        >

      </Button>)}
    </ul>
} else return <div></div>

}
}


//Counters();
const DisplayCounters = () => (
  <div>
      <AddCounter />
    <Counters />

  </div>
)

ReactDOM.render(<DisplayCounters />,document.getElementById('app'));
