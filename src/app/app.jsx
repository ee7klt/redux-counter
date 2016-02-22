import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';




const counters = (state ={},action) => {

switch (action.type) {
case 'INCREMENT':
 return state.map(counter => {
   if (counter.id === action.id) {
     return {...counter, count: counter.count+1};
     }
   else return counter;
 }).sort(function(a,b) {return a.count-b.count}).reverse();

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

testIncrement();
