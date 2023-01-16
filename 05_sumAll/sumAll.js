const sumAll = function(start, end) {
    if (typeof(start) != 'number' || typeof(end) != 'number') return "ERROR";
    if (start < 0 || end < 0 ) return "ERROR";

    let params = [start, end].sort((a, b) => a-b);
    let sum = 0;
    for (let i = params[0]; i <= params[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
