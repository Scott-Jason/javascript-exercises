const fibonacci = function(index) {
    index = parseInt(index);
    if( index < 0){ return "OOPS"};
    if(index == 0) return 0;
    
    let a = 0;
    let b = 1;
    let c = 0;
    for( let i = 0; i < index-1; i++){
        c = b;
        b = a+b;
        a = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
