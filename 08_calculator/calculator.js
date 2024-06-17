const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(nums) {
  let total = 0;
  for( let num of nums){
    total += num;
  }
  return total;
};

const multiply = function(nums) {
  let total = 1;
  for( let num of nums){
    total *= num;
  }
  return total;

};

const power = function(a , b) {
  return a**b;
};

const factorial = function(a) {
  let total = 1;
  for(let i = 1; i <= a; i++){
    total *= i;
  }
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
