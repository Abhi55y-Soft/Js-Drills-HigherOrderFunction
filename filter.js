function filter(array, cb){
    let list = [];
    let index = 0;
    for (; index<array.length; index++){
        let element = array[index];
        if (cb(element, list, index)){
            list.push(element);
        }
    }
    return list;
}
module.exports.filter = filter;