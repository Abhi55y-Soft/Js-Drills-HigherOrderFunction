const {find} = require('../find');
let list = [1, 2, 3, 4, 5, 5];
const cb = (element, index) => {return element > 3;}
console.log(find(list, cb));