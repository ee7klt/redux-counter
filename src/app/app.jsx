import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';





// reducer composition concept 1: different reducers specify how
// differnt parts of the state tree are updated in response
// to the actions.
// counter is called from within counters.


const counter =(state = {}, action ) => {
// separate councerns between an individual counter
// and the counters overall.
// state is now a single counter here
  switch(action.type) {
    case 'INCREMENT':
      if (state.id === action.id)
        return {...state, count: state.count+1};
      else return state;

      case 'DECREMENT':
        if (state.id === action.id)
          return {...state, count: state.count-1};
        else return state;

case 'ADD_COUNTER':
   return  {id:action.id, count: 0 }
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
  return [...state, counter(state,action)];


default:
return state;

};
};

// this is an example of how we can use a
// common action type to trigger changes to state/
// in two separate reducers.
// In this case ADD_COUNTER adds a new counter in counters
// as well increments the count of counters added.
const addCount = (state = 0, action) => {
  switch (action.type) {
  case 'ADD_COUNTER':
    return state+1;
  default:
    return state;
  }
}

// reducer composition concept 2: combine reducers
// state is not combined state output from all the reducers
// wrap counters in to a master state
// as a key value pair with the counters in a value of key 'counters'
const counterApp = (state = {}, action) => {
  return {
    counters: counters(state.counters, action),
    addCount: addCount(state.addCount, action),
  }

}

const testAddCounter = () => {

  const stateBefore = {counters: [{id:0, count:5},{id:1, count:5},{id:2, count:1}], addCount: 3};
  const stateAfter =  {counters:[{id:0, count:5},{id:1, count:5},{id:2, count:1}, {id: 3, count: 0} ], addCount: 4};
  const action = {type: 'ADD_COUNTER', id: 3};
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


//testIncrement();
//testDecrement();
testAddCounter();
