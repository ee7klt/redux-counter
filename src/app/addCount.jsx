
// this is an example of how we can use a
// common action type to trigger changes to state/
// in two separate reducers.
// In this case ADD_COUNTER adds a new counter in counters
// as well increments the count of counters added.
export const addCount = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
    return state+1;
    case 'REMOVE_COUNTER':
    return state-1;
    default:
    return state;
  }
}
