const sumAll = function(a, b) {
    if(a < 0 || b < 0 || typeof a != "number" || typeof b != "number") return "ERROR";
    if(a > b){
        let c = a;
        a = b;
        b = c;
    }
    let ans = 0;
    for(let i = a; i <= b; i++){
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
