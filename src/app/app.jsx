 let state = [{id:0, count:5},{id:1, count:3},{id:2, count:1}];

/**
let increment = (list,id) => {

 // index = list.findIndex((x) => {return x.id === id;});
 let  index=1;
 return [
    ...list.slice(0, index),
    list[index].count +1,
    ...list.slice(index+1),
  ];

};
**/


const increment = (list ={},id) => {

 return list.map(todo => {
   if (todo.id === id) {
   console.log('match found ... incrementing')
     return {...todo, count: todo.count+1};
     }
   else return todo;
 });

};

console.log(state)
console.log(increment(state,1))
/**
state = increment(state,1);
console.log(state);
state = increment(state,1);
console.log(state);
state = increment(state,2);
console.log(state);
**/
