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
  // c is a single counter.
case 'INCREMENT':
case 'DECREMENT':
 return state.map(c => counter(c, action))
    .sort(function(a,b) {return a.count-b.count}).reverse();

default:
return state;

};
};



const testIncrement = () => {

const stateBefore =  [{id:0, count:5},{id:1, count:5},{id:2, count:1}];
const stateAfter =  [{id:1, count:6},{id:0, count:5},{id:2, count:1}];
const action = {type: 'INCREMENT', id: 1};
deepFreeze(stateBefore);
deepFreeze(action);
expect (counters(stateBefore,action)).toEqual(stateAfter)
console.log('testIncrement passed');

}


const testDecrement = () => {

const stateBefore =  [{id:0, count:5},{id:1, count:5},{id:2, count:1}];
const stateAfter =  [{id:1, count:5},{id:0, count:4},{id:2, count:1}];
const action = {type: 'DECREMENT', id: 0};
deepFreeze(stateBefore);
deepFreeze(action);
expect (counters(stateBefore,action)).toEqual(stateAfter)
console.log('testDecrement passed');

}


testIncrement();
testDecrement();
