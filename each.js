function each(array, cb){
    for (let index=0; index<array.length; index++){
        let element = array[index];
        cb(element, index);
    }
}
module.exports.each = each;