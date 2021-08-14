const {each} = require('../each');
let list = [1, 2, 3, 4, 5, 5];

const cb = (element, elementIndex) => console.log(element, elementIndex);

each(list, cb);