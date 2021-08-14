const {reduce} = require('../reduce');
let list = [1, 2, 3, 4, 5, 5];
const cb = (accumulator, currentValue) => {accumulator + currentValue;}
console.log(reduce(list, cb));