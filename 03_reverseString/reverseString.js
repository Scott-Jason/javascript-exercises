const reverseString = function(input) {
    let ans = []
    let ret = '';
    for(const char of input){
        ans.push(char);
    }
    for( let i = 0; i < input.length; i++){
        ret += ans.pop();
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
