import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';





const counter =(state = {}, action ) => {
// state is now a single counter
  switch(action.type) {
    case 'INCREMENT':
      if (state.id === action.id)
        return {...state, count: state.count+1};
      else return state;

      case 'DECREMENT':
        if (state.id === action.id)
          return {...state, count: state.count-1};
        else return state;


    default: state
  }
}

const counters = (state ={},action) => {

switch (action.type) {
  // state is all of the counters
  // c is a single counter.
case 'INCREMENT':
case 'DECREMENT':
 return state.map(c => counter(c, action))
    .sort(function(a,b) {return a.count-b.count}).reverse();

case 'ADD_COUNTER':
  return [...state, {id: state.length, count: 0 }];


default:
return state;

};
};



const counterApp = (state = {}, action) => {
  return {
    counters: counters(state.counters, action),
  }

}

const testAddCounter = () => {

  const stateBefore = {counters: [{id:0, count:5},{id:1, count:5},{id:2, count:1}]};
  const stateAfter =  {counters:[{id:0, count:5},{id:1, count:5},{id:2, count:1}, {id: 3, count: 0} ]};
  const action = {type: 'ADD_COUNTER'};
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect (counterApp(stateBefore,action)).toEqual(stateAfter)
  console.log('testAddCounter passed');
}

const testIncrement = () => {

const stateBefore =  {counters: [{id:0, count:5},{id:1, count:5},{id:2, count:1}]};
const stateAfter =  {counters: [{id:1, count:6},{id:0, count:5},{id:2, count:1}]};
const action = {type: 'INCREMENT', id: 1};
deepFreeze(stateBefore);
deepFreeze(action);
expect (counterApp(stateBefore,action)).toEqual(stateAfter)
console.log('testIncrement passed');

}


const testDecrement = () => {

const stateBefore =  {counters: [{id:0, count:5},{id:1, count:5},{id:2, count:1}]};
const stateAfter = {counters:  [{id:1, count:5},{id:0, count:4},{id:2, count:1}]};
const action = {type: 'DECREMENT', id: 0};
deepFreeze(stateBefore);
deepFreeze(action);
expect (counterApp(stateBefore,action)).toEqual(stateAfter)
console.log('testDecrement passed');

}


testIncrement();
testDecrement();
testAddCounter();
