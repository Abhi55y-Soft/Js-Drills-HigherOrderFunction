function map(array, cb){
    let list = [];
    let index = 0;
    for (; index<array.length; index++){
        let element = array[index];
        list.push(cb(element, list, index));
    }
    return list;
}
module.exports.map = map;