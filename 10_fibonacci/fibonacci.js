const fibonacci = function(num) {
    if (num < 0) return "OOPS"; 
    let fibonacciSeq = [];
    for (let i = 0; i < num; i++) {
        if (i == 0 || i == 1) fibonacciSeq.push(1)
        else fibonacciSeq.push((fibonacciSeq[i - 1] + fibonacciSeq[i - 2]));
    }
    return fibonacciSeq[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
