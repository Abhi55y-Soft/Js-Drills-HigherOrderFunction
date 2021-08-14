function flatten(array, depth = 999){
    if (depth > 0){
        for (let index = 0; index < depth; index++){
            array = [].concat(...array);
        }
        return array;
    }
    else{
        return array;
    }
}


module.exports.flatten = flatten;