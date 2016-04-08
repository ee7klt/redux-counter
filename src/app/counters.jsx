
import {counter} from './counter.jsx'

export const counters = (state ={},action) => {

  switch (action.type) {
    // state is all of the counters
    // c is a single counter.
    case 'INCREMENT':
    case 'DECREMENT':
    return state.map(c => counter(c, action)).sort((a,b) => {
      // promote a counter only if it is not already first
      // and if it's count exceeds the counter above it.
    //   if ((c.id !==1) && (c.id === action.id))
    return b.count - a.count;
    });

    case 'ADD_COUNTER':
    return [...state, counter(state,action)];

    case 'REMOVE_COUNTER':
    return state.filter(c => counter(c, action));

    default:
    return state;

  };
};
