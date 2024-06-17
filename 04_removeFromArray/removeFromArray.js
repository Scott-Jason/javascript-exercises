const removeFromArray = function(array, ...toRemove) {
    let retArr = [];
    let lock = true;
    for( const val of array){
        for(const badToken of toRemove){
            if(val == badToken && typeof val == typeof badToken) lock = false;
        }
        if(lock) retArr.push(val);
        lock = true;
    }
    return retArr;
};

// Do not edit below this line
module.exports = removeFromArray;
