const {filter} = require('../filter');
let list = [1, 2, 3, 4, 5, 5];

const cb = (element,list, elementIndex) => {return element > 3;}

console.log(filter(list, cb));