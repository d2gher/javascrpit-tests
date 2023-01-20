const add = function(...args) {
	const sum = [...args].reduce((total, number) => total + number, 0);
  return sum;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	const sum = arr.reduce((total, number) => total + number, 0);
  return sum;
};

const multiply = function(arr) {
  const sum = arr.reduce((total, number) => total * number, 1);
  return sum;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let sum = 1;
	for (let i = 1; i < num; i++) {
    sum *= (i + 1);
  }
  return sum
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
