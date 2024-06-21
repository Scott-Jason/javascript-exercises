const palindromes = function (arr) {
    arr = arr.toLowerCase();
    const newArr = arr.split("").filter(char => (char >= 'a' && char <= 'z')||(char >= '0' && char <= '9'));
    const comp = newArr.join("");
    const rev = newArr.reverse().join("");
    console.log(rev);
    return rev == comp ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
