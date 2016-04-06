import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';
import {createStore} from 'redux';
import {counterApp} from './counterApp.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';



const store = createStore(counterApp);

const Button = ({
  count,
}) => (
  <span>
    <button>+</button>
    <span>{count}</span>
    <button>-</button>
  </span>

)




let nextCounterId = 0;
const AddCounter = () => (
    <button onClick = {() => {store.dispatch({
    type: 'ADD_COUNTER', id:nextCounterId++,
  })
}}>Add Counter</button>
)


class Counters extends Component {
  const state = store.getState();
  const counters = state.counters;
  render() {
    return <div>
      {
        counters.map(
          x => {
            <Button>{x.count}</Button>

    }
  )
  }
  </div>

  }
}

//Counters();
const DisplayCounters = () => (
  <div>
  <Counters />
  <AddCounter />
  </div>
)

ReactDOM.render(<DisplayCounters />,document.getElementById('app'));
