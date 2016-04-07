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
  <li>
    <button>+</button>
    <span>{count}</span>
    <button>-</button>
  </li>

)




let nextCounterId = 0;
const AddCounter = () => (
  <button onClick = {() => {store.dispatch({
      type: 'ADD_COUNTER', id:nextCounterId++,
    })
  }}>Add Counter</button>
)


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
      {counters.map(x => <Button count = {x.count}></Button>)}
    </ul>
} else return <div></div>

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
