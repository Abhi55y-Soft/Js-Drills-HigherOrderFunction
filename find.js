function find(array, cb){
    let index = 0;
    for (; index<array.length; index++){
        let element = array[index];
        if (cb(element, index)){
            return element;
        }
    }
}
module.exports.find = find;