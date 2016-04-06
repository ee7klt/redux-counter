import {counters} from './counters.jsx';
import {addCount} from './addCount.jsx';








// reducer composition concept 2: combine reducers
// state is not combined state output from all the reducers
// wrap counters in to a master state
// as a key value pair with the counters in a value of key 'counters'
export const counterApp = (state = {}, action) => {
  return {
    counters: counters(state.counters, action),
    addCount: addCount(state.addCount, action),
  }

}
