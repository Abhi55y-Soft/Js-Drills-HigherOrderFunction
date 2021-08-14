function reduce(array, cb){
    let index = 0;
    let accumulator = 0;
    let currentValue = 0;
    for (; index<array.length; index++){
        currentValue = array[index];
        cb(accumulator, currentValue, index);
        accumulator += currentValue;
    }
    return accumulator; 
}
module.exports.reduce = reduce;