

// reducer composition concept 1: different reducers specify how
// differnt parts of the state tree are updated in response
// to the actions.
// counter is called from within counters.


export  const counter =(state = {}, action ) => {
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
    console.log('adding a new counter...');
    return  {id:action.id, count: 0 };

    case 'REMOVE_COUNTER':
      if (state.id !== action.id)
      return state;


    default: state



  }


}
