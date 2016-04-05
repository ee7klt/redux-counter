
import {counter} from './counter.jsx'

export const counters = (state ={},action) => {

  switch (action.type) {
    // state is all of the counters
    // c is a single counter.
    case 'INCREMENT':
    case 'DECREMENT':
    return state.map(c => counter(c, action))
    .sort(function(a,b) {return a.count-b.count}).reverse();

    case 'ADD_COUNTER':
    return [...state, counter(state,action)];

    case 'REMOVE_COUNTER':
    return state.filter(c => counter(c, action));

    default:
    return state;

  };
};
