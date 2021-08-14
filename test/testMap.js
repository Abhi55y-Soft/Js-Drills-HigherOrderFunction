const {map} = require('../map');
let list = [1, 2, 3, 4, 5, 5];

const cb = (element,list, elementIndex) => {return element*2;}

console.log(map(list, cb));