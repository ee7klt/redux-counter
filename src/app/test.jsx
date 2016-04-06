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

  const stateBefore =  {counters: [{id:0, count:5},{id:1, count:5},{id:2, count:1}], addCount: 3};
  const stateAfter =  {counters: [{id:1, count:6},{id:0, count:5},{id:2, count:1}], addCount: 3};
  const action = {type: 'INCREMENT', id: 1};
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect (counterApp(stateBefore,action)).toEqual(stateAfter)
  console.log('testIncrement passed');

}


const testDecrement = () => {

  const stateBefore =  {counters: [{id:0, count:5},{id:1, count:5},{id:2, count:1}], addCount: 3};
  const stateAfter = {counters:  [{id:1, count:5},{id:0, count:4},{id:2, count:1}], addCount: 3};
  const action = {type: 'DECREMENT', id: 0};
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect (counterApp(stateBefore,action)).toEqual(stateAfter)
  console.log('testDecrement passed');

}

const testRemoveCounter = () => {
  const stateBefore =  {counters: [{id:0, count:5},{id:1, count:5},{id:2, count:1}], addCount: 3};
  const stateAfter = {counters:  [{id:1, count:5}, {id:2, count:1}], addCount: 2};
  const action = {type: 'REMOVE_COUNTER', id: 0};
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect (counterApp(stateBefore,action)).toEqual(stateAfter)
  console.log('testRemoveCounter passed');
}

testIncrement();
testDecrement();
testAddCounter();
testRemoveCounter();
