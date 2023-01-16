const convertToCelsius = function(f) {
  // Convert from Fahrenheit to Celsius formula
  let c = (f - 32) * 5/9;
  return +c.toFixed(1);
};

const convertToFahrenheit = function(c) {
  // Convert from Celsius to Fahrenheit formula
  let f = (c * 9 / 5 + 32);
  return +f.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
